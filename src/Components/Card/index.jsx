import { Container, FavIcon, MinusIcon, PlusIcon } from './styles'

import { FiHeart, FiMinus, FiPlus } from 'react-icons/fi'

import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { Button } from '../../Components/Button'
import pencil from '../../assets/pencil.svg'

import { api } from '../../services/api'

import { useAuth } from '../../hooks/authContext'


export function Card({ data, ...rest }) {
    const navigate = useNavigate()
    const [counter, setCounter] = useState(1)

    const { user } = useAuth()

    function handleDetails() {
        navigate(`/details/${data.id}`)
    }

    function handleIncrease() {
        setCounter(counter + 1)
    }

    function handleDecrease() {
        if (counter <= 1) {
            return
        }
        setCounter(counter - 1)
    }

    async function handleOrder() {

        for (let i = 0; i < counter ; i++) {
            api.post('orders', { status: 'pending', user_id: user.id, details: data.name })
                .then(() => console.log(`Pedido ${data.name} adicionado ao carrinho`))
                .catch(error => {
                    if (error.response) {
                        alert(error.response.data.message)
                    } else {
                        alert('erro ao tentar o cadastro')
                    }
                })

        }

        alert('Pedido feito com sucesso')
    }

    return (
        <Container>
            <img src={`http://localhost:3333/files/${data.photo}`} alt="" onClick={handleDetails} />

            <FavIcon>
                {user.isAdm === 0 ? <FiHeart/> : <img src={pencil}/> }
            </FavIcon>

            <h1>{data.name}</h1>

            <p>{data.description}</p>

            <h2>{data.price}</h2>

            <div>
                <MinusIcon onClick={handleDecrease}>
                    <FiMinus />
                </MinusIcon>

                <span>{counter}</span>

                <PlusIcon onClick={handleIncrease}>
                    <FiPlus />
                </PlusIcon>

                <Button loading={false} title="Incluir" onClick={handleOrder}/>
            </div>
        </Container>
    )
}