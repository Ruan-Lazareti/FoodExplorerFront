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
    const [type, setType] = useState('')

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

        try {
            const response = await api.post('/dishes', {
                name,
                description,
                price,
                type,
                ingredients
            })

            const newDishId = response.data.id

            const fileUploadForm = new FormData()
            fileUploadForm.append('photo', photo)

            await api.patch(`/dishes/photo/${newDishId.id}`, fileUploadForm)

            alert('prato adicionado com sucesso')
        } catch (error) {
            alert('Erro ao adicionar prato. Entre em contato com o administrador do sistema.')
        }
        
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

                            <InputFile htmlFor='dish-picture'>
                                <img src={UploadIcon} alt="" />
                                <label htmlFor='dish-picture' id='label-picture'>
                                    Selecione a imagem
                                    <input type='file' id='dish-picture' name='dish-picture' onChange={handleDishPhoto} />
                                </label>
                            </InputFile>
                        </ShorterInput>

                        <BiggerInput>
                            <label htmlFor='name'>
                                Nome
                            </label>

                            <InputAddDish placeholder="Ex.: Salada Ceasar" type="text" id='name' name='name' onChange={event => setName(event.target.value)} />
                        </BiggerInput>

                        <ShorterInput>
                            <label htmlFor='category'>
                                Categoria
                            </label>

                            <select name="category" id="category" onChange={event => setType(event.target.value)}>
                                <option value="main">Refeição</option>
                                <option value="dessert">Sobremesa</option>
                                <option value="drink">Bebida</option>
                            </select>
                        </ShorterInput>

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
                                    placeholder='Adicionar'
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

                            <InputAddDish placeholder="R$ 00,00" type="number" id='price' name='price' onChange={event => setPrice(event.target.value)} />
                        </ShorterInput>
                    </Section>

                    <Section>
                        <Textarea>
                            <label htmlFor='description'>
                                Descrição
                            </label>

                            <textarea name="description" id="description" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" onChange={event => setDescription(event.target.value)}></textarea>
                        </Textarea>
                    </Section>  

                    <Section>
                        <FormButton onClick={handleNewDish}>Salvar Alterações</FormButton>
                    </Section>
                </Form>
            </Content>

            <Footer />
        </Container>
    )
}