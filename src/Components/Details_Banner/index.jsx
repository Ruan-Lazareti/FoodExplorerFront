import { Container, Content, MinusIcon, PlusIcon, IngredientsWrapper, IngredientCard, ButtonWrapper, HeaderButton } from './styles'

import { Button } from '../Button'
import { Tag } from '../Tag'

import orderIcon from '../../assets/orderIcon.svg'
import leftArrow from '../../assets/leftarrow.svg'
import { FiMinus, FiPlus } from 'react-icons/fi'

import { api } from '../../services/api'

import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { useAuth } from '../../hooks/authContext'

export function DetailsBanner({ data, ...rest }) {
    const navigate = useNavigate()
    const [counter, setCounter] = useState(1)
    const [controlclick, setControlClick] = useState(0)
    const params = useParams()
    const [ingredients, setIngredients] = useState([])

    const { user } = useAuth()

    function handleBack() {
        navigate((-1))
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

        for (let i = 0; i < counter; i++) {
            api.post('orders', { status: 'pending', user_id: user.id, details: data.name })
                .then(() => console.log(`Pedido ${data.name} adicionado ao carrinho`))
                .catch(error => {
                    if (error.response) {
                        alert(error.response.data.message)
                    } else {
                        alert('erro ao tentar o fazer o pedido')
                    }
                })

        }

        alert('Pedido feito com sucesso')
    }

    function handleClick(){
        setControlClick(+1)
    }

    useEffect(() => {
        async function fetchIngredients() {
            const response = await api.get(`/dishes/${params.id}`)
            const ingredientsArray = response.data[0].ingredients.split(',')

            setIngredients(ingredientsArray)
        }

        fetchIngredients()
    }, [])

    const buttonsClient = document.querySelector(".buttonsClient")
    const buttonsAdmin = document.querySelector(".buttonsAdmin")
    const buttons = document.querySelector("#buttons")


    if(user.isAdm === 0 && buttons) {
        buttonsClient.classList.remove("hidden")
        buttonsAdmin.classList.add("hidden")
    } else if (user.isAdm === 1 && buttons) {
        buttonsAdmin.classList.remove("hidden")
        buttonsClient.classList.add("hidden")
    }

    return (
        <Container>
            <header>
                <HeaderButton onClick={handleBack}>
                    <img src={leftArrow} alt="" />
                    voltar
                </HeaderButton>
            </header>

            <Content>

                <img src={`http://localhost:3333/files/${data[0].photo}`} alt="" />

                <div>
                    <h1>{data[0].name}</h1>

                    <h3>{data[0].description}</h3>

                    <IngredientsWrapper>

                        {
                            ingredients && ingredients.map(ingredient => (
                                <Tag title={ingredient}/>
                            ))
                        }

                    </IngredientsWrapper>

                    

                    <ButtonWrapper className='buttonsClient' id='buttons'>                     
                        <MinusIcon onClick={handleDecrease}>
                            <FiMinus />
                        </MinusIcon>

                        <span>{counter}</span>

                        <PlusIcon onClick={handleIncrease}>
                            <FiPlus />
                        </PlusIcon>

                        <div>
                            <Button loading={false} title={"incluir - R$ "+data[0].price} onClick={handleOrder} />
                        </div>

                    </ButtonWrapper>

                    <ButtonWrapper className='buttonsAdmin' id='buttons'>
                        <div>
                            <Button loading={false} title="Editar Prato" onClick={handleOrder} />
                        </div>
                    </ButtonWrapper>
                </div>

            </Content>
        </Container>
    )
}