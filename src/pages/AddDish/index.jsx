import { Container, HeaderButton, Form, Content, ShorterInput, BiggerInput, Textarea, Section, InputFile, FormButton } from './styles'

import { useState } from 'react'

import { api } from '../../services/api'

import { Header } from '../../Components/Header'
import { Footer } from '../../Components/Footer'
import { InputAddDish } from '../../Components/InputAddDish'
import { IngredientItem } from '../../Components/IngredientItem'

import UploadIcon from '../../assets/uploadIcon.svg'
import leftArrow from '../../assets/leftarrow.svg'

import { useNavigate } from 'react-router-dom'

export function AddDish() {
    const navigate = useNavigate()

    let id = 1

    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [photo, setPhoto] = useState('')
    const type = 'main'

    function handleAddIngredient() {
        setIngredients(prevState => [...prevState, newIngredient])
        setNewIngredient('')
    }

    function handleRemoveIngredient(deletedIngredient) {
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deletedIngredient))
    }

    function handleBack() {
        navigate((-1))
    }

    function handleDishPhoto(event) {
        const file = event.target.files[0]

        setPhoto(file)
    }


    async function handleNewDish(event) {
        event.preventDefault();

        if (!name || !price || !description || !photo) {
            return alert('Por favor preencha todos os campos para adicionar um prato')
        }

        await api.post('/dishes', {
            name,
            description,
            price,
            type,
            ingredients
        })

        const fileUploadForm = new FormData()
        fileUploadForm.append('photo', photo)
        
        await api.patch(`/dishes/photo/${id}`, fileUploadForm)

        id++

        alert('prato adicionado com sucesso')
    }

    return (
        <Container>
            <Header />

            <Content>
                <header>
                    <HeaderButton onClick={handleBack}>
                        <img src={leftArrow} alt="" />
                        voltar
                    </HeaderButton>
                </header>

                <Form>
                    <h1>Adicionar Prato</h1>
                    <Section>
                        <ShorterInput>
                            <label htmlFor='img'>
                                Imagem do Prato
                            </label>

                            <InputFile>
                                <img src={UploadIcon} alt="" />
                                <label htmlFor='dish-picture' id='label-picture'>
                                    Selecione a foto do prato
                                    <input type='file' id='dish-picture' onChange={handleDishPhoto} />
                                </label>
                            </InputFile>
                        </ShorterInput>
                        <BiggerInput>
                            <label htmlFor='name'>
                                Nome do Prato
                            </label>

                            <InputAddDish placeholder="Ex.: Salada Ceasar" type="text" id='name' name='name' onChange={event => setName(event.target.value)} />
                        </BiggerInput>
                    </Section>
                    <Section>
                        <BiggerInput>
                            <span>Ingredientes</span>
                            <Section id='ingredients-section'>
                                {
                                    ingredients.map((ingredient) => (
                                        <IngredientItem
                                            value={ingredient}
                                            onClick={() => { handleRemoveIngredient(ingredient) }}
                                        />
                                    ))
                                }

                                <IngredientItem
                                    isNew
                                    placeholder='Nome do ingrediente'
                                    value={newIngredient}
                                    onChange={event => setNewIngredient(event.target.value)}
                                    onClick={handleAddIngredient}
                                />

                            </Section>
                        </BiggerInput>
                        <ShorterInput>
                            <label htmlFor='price'>
                                Preço
                            </label>

                            <InputAddDish placeholder="Ex.: Salada Ceasar" type="text" id='price' name='price' onChange={event => setPrice(event.target.value)} />
                        </ShorterInput>
                    </Section>

                    <Textarea>
                        <label htmlFor='description'>
                            Descrição
                        </label>

                        <textarea name="description" id="description" placeholder="Descrição do prato" onChange={event => setDescription(event.target.value)}></textarea>
                    </Textarea>

                    <Section>
                        <FormButton onClick={handleNewDish}>Adicionar Prato</FormButton>
                    </Section>
                </Form>
            </Content>

            <Footer />
        </Container>
    )
}