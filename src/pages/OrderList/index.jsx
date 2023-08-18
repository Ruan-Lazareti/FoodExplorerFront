import { Container, HeaderButton, Content } from './styles'

import leftArrow from '../../assets/leftarrow.svg'

import { Header } from '../../Components/Header'
import { Footer } from '../../Components/Footer'
import { TableHeader } from '../../Components/TableHeader'
import { TableRow } from '../../Components/TableRow'

import { useNavigate } from 'react-router-dom'

import { useState, useEffect } from 'react'

import { useAuth } from '../../hooks/authContext'

import { api } from '../../services/api'

export function OrderList() {
    const navigate = useNavigate()

    const { user } = useAuth()

    const [orders, setOrder] = useState([])

    console.log(orders)

    function handleBack() {
        navigate((-1))
    }

    useEffect(() => {
        async function fetchOrders() {
            const response = await api.get(`/orders?user_id=${user.id}`)

            setOrder(response.data)
        }

        fetchOrders()
    }, [])

    return (
        <Container>
            <Header />
            <Content>
                <header>
                    <h1>Pedidos</h1>

                    <HeaderButton onClick={handleBack}>
                        <img src={leftArrow} alt="Voltar" />
                        voltar
                    </HeaderButton>
                </header>

                <main>
                    <TableHeader />
                    {
                        orders.length > 0 && orders.map((order) => (
                            <TableRow order={order} key={order.id}/>
                        ))
                    }

                </main>
            </Content>

            <Footer />

        </Container>
    )
}