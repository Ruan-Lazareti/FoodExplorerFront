import { Container, LogOut } from './styles'
import { useAuth } from '../../hooks/authContext'

import { api } from '../../services/api'

import logo from '../../assets/logo.svg'
import menu from '../../assets/menu.svg'
import orderIcon from '../../assets/orderIcon.svg'
import logout from '../../assets/logout.svg'
import { FiSearch } from 'react-icons/fi'

import { Button } from '../../Components/Button'
import { Input } from '../../Components/Input'

import plusIcon from '../../assets/plus.svg'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

export function Header({ searchTerm, setSearchTerm }) {
    const { user, signOut } = useAuth()
    const navigate = useNavigate()
    const [searchResults, setSearchResults] = useState('');

    useEffect(() => {
        async function fetchSearchResults() {
            try {
                const response = await api.get(`/search?query=${searchTerm}`)
                setSearchResults(response.data)
            } catch {
                alert('Erro ao buscar resultados')
            }
        }

        if(searchTerm) {
            fetchSearchResults()
        } else {
            setSearchResults([])
        }
    }, [searchTerm])

    function handleAddDish() {
        if (user.isAdm === 1) {
            navigate(`/add`)
        } else{
            return alert('Apenas Adms são autorizados a adicionar pratos')
        }
    }

    function handleOrders() {
        if(user.isAdm === 1) {
            navigate('/orderadm')
        } else {
            navigate('/orders')
        }
    }

    const buttons = document.querySelector(".button-wrapper")
    const logoText = document.querySelector(".logo-wrapper")
    const orderButton = document.querySelector(".buttonMobile")

    if(user.isAdm === 0 && buttons) {
        buttons.firstChild.classList.add("hidden")
        logoText.lastChild.classList.add("hidden")
    } else if (user.isAdm === 1 && buttons) {
        buttons.lastChild.classList.add("hidden")
        orderButton.lastChild.classList.add("hidden")
    }


    return (
        <Container>
            <div className="menu" id="mobile">
                <img src={menu} alt="menu encolhido" />
            </div>

            <div>
                <img src={logo} alt="logo empresa" />
                <div className="logo-wrapper">
                    <h1>food explorer</h1>
                    <h2>admin</h2>
                </div>
            </div>

            <div id="desktop">
                <Input 
                    icon={FiSearch} 
                    placeholder="Busque por pratos ou ingredientes" 
                    type="text" 
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
            </div>
    
            <div className="button-wrapper" id="desktop">
                <Button loading={false} title="Adicionar Prato" picture={plusIcon} onClick={handleAddDish}/>
                <Button loading={false} title="Pedidos (0)" picture={orderIcon}  onClick={handleOrders}/>
            </div>

            <div className="buttonMobile" id="mobile">
                <button onClick={handleOrders}>
                    <img src={orderIcon}/>
                </button>
            </div>

            <LogOut onClick={signOut} id="desktop">
                <img src={logout} alt=""/>
            </LogOut>
        </Container>
    )
}