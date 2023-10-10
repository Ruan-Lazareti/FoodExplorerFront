import { Container, HeaderButton, Form, Content, ShorterInput, BiggerInput, Textarea, Section, InputFile, FormButton } from './styles'

import { useState, useEffect } from 'react'

import { api } from '../../services/api'
import { useParams } from 'react-router-dom'

import { Header } from '../../Components/Header'
import { Footer } from '../../Components/Footer'
import { InputAddDish } from '../../Components/InputAddDish'
import { IngredientItem } from '../../Components/IngredientItem'

import UploadIcon from '../../assets/uploadIcon.svg'
import leftArrow from '../../assets/leftarrow.svg'

import { useNavigate } from 'react-router-dom'

export function EditDish({ dishId }) {
    const navigate = useNavigate()
    const params = useParams()
    
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [photo, setPhoto] = useState('')

    useEffect(() => {
      async function fetchData() {
        const response = await api.get(`/dishes/${params.id}`)
        const { name, type, price, description, ingredients, photo } = response.data[0];
        const ingredientsArray = ingredients.split(',')
        
        setName(name);
        setType(type);
        setPrice(price);
        setDescription(description);
        setIngredients(ingredientsArray);
        setPhoto(photo);

        console.log(response)
      }

      fetchData()
    }, [])

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

    async function handleDeleteDish(event) {
      event.preventDefault()

      await api.delete(`/dishes/${params.id}`)

      alert('Prato deletado com sucesso!')
    }

    async function handleEditDish(event) {
      event.preventDefault();

      if (!name || !price || !description || !photo) {
          return alert('Por favor preencha todos os campos para prosseguir com a alteração')
      }

      try {
          const response = await api.put(`/dishes/${params.id}`, {
              name,
              description,
              price,
              type,
              ingredients,
              photo
          })

          alert('Prato alterado com sucesso!')

          handleBack()
      } catch (error) {
          alert('Erro ao alterar prato. Entre em contato com o administrador do sistema.')
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
                    <h1>Editar Prato</h1>
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

                            <InputAddDish value={name} type="text" id='name' name='name' onChange={event => setName(event.target.value)} />
                        </BiggerInput>

                        <ShorterInput>
                            <label htmlFor='category'>
                                Categoria
                            </label>

                            <select value={type} name="category" id="category" onChange={event => setType(event.target.value)}>
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

                            <InputAddDish value={price} type="number" id='price' name='price' onChange={event => setPrice(event.target.value)} />
                        </ShorterInput>
                    </Section>

                    <Section>
                        <Textarea>
                            <label htmlFor='description'>
                                Descrição
                            </label>

                            <textarea name="description" id="description" value={description} onChange={event => setDescription(event.target.value)}></textarea>
                        </Textarea>
                    </Section>  

                    <Section>
                        <FormButton onClick={handleDeleteDish}>Excluir Prato</FormButton>
                        <FormButton onClick={handleEditDish} className='saveButton'>Salvar Alterações</FormButton>
                    </Section>
                </Form>
            </Content>

            <Footer />
        </Container>
    )
}