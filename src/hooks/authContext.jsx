import { createContext, useContext, useState, useEffect } from 'react'

export const AuthContext = createContext({})

import { api } from '../services/api'

function AuthProvider({ children }) {
    const [data, setData] = useState({})


    async function signIn({ email, password }) {
        try {
            const response = await api.post('/sessions', { email, password })
            const { user, token } = response.data

            localStorage.setItem('@foodexplorer:user', JSON.stringify(user))
            localStorage.setItem('@foodexplorer:token', token)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            setData({ user, token })
        } catch (e) {
            if (e.response) {
                alert(e.response.data.message)
            } else {
                alert('falha ao tentar realizar o login')
            }
        }
    }

    function signOut() {
        localStorage.removeItem('@foodexplorer:token')
        localStorage.removeItem('@foodexplorer:user')

        setData({})
    }

    useEffect(() => {
        const token = localStorage.getItem('@foodexplorer:token')
        const user = localStorage.getItem('@foodexplorer:user')

        if (token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({
                token,
                user: JSON.parse(user)
            })
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            user: data.user
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth } 