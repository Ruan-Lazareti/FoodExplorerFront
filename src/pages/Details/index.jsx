import { Container } from './styles'

import { DetailsBanner } from '../../Components/Details_Banner'
import { Header } from '../../Components/Header'
import { Footer } from '../../Components/Footer'

import { api } from '../../services/api'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export function Details() {
    const params = useParams()
    const [data, setData] = useState([])
    
    useEffect(() => {
        async function fetchDish() {
            const response = await api.get(`/dishes/${params.id}`)
            setData(response.data)
        }
        
        fetchDish()
    }, [])

    return (
        <Container>
            <Header />

            { data.length > 0 &&
                <DetailsBanner data={data}/>
            }

            <Footer />
        </Container>
    )
}