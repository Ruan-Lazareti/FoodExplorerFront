import { Container, Content, Banner } from './styles'

import { Header } from '../../Components/Header'
import { Card } from '../../Components/Card'
import { Footer } from '../../Components/Footer'

import 'react-multi-carousel/lib/styles.css';

import { FiSearch } from 'react-icons/fi'

import Carousel from 'better-react-carousel'

import { Input } from '../../Components/Input'

import banner from '../../assets/banner.svg'

import { useState, useEffect } from 'react'

import { api } from '../../services/api'

export function Home() {
  const [search, setSearch] = useState('')
  const [searchedDishes, setSearchedDishes] = useState([])
  const [mainDishes, setMainDishes] = useState([])
  const [drinks, setDrinks] = useState([])
  const [desserts, setDesserts] = useState([])

  const [searchResults, setSearchResults] = useState([])

  
  useEffect(() => {
    async function fetchMainDishes() {
      const response = await api.get(`/getters/main`)
      setMainDishes(response.data)
    }
    async function fetchDrinks() {
      const response = await api.get(`/getters/drink`)
      setDrinks(response.data)
    }
    async function fetchDesserts() {
      const response = await api.get(`/getters/dessert`)
      setDesserts(response.data)
    }

    fetchMainDishes()
    fetchDesserts()
    fetchDrinks()

  }, [])

  useEffect(() => {
    
    let resultsMainDishes = mainDishes.filter(dish => dish.name.toLowerCase().includes(search.toLowerCase()))
    let resultsDrinks = drinks.filter(drink => drink.name.toLowerCase().includes(search.toLowerCase()))
    let resultsDesserts = desserts.filter(dessert => dessert.name.toLowerCase().includes(search.toLowerCase()))
    
    const result = [].concat(resultsMainDishes, resultsDrinks, resultsDesserts)
    
    setSearchResults(result)
    
  }, [search])

  const carousel = Carousel
  const carouselMobile = [
    {
      breakpoint: 4000,
      cols: 3,
      rows: 1,
      gap: 0,
      loop: true,
    },
    {
      breakpoint: 1000,
      cols: 2,
      rows: 1,
      gap: 50,
      loop: true,
    },
  ]  

  return (
    <Container>
      <Header />

      <Content>
        <Banner>
          <div>
            <img src={banner} alt="Imagem de comidas apetitosas." />
          </div>

          <div className="banner">
            <h1>Sabores inigualáveis</h1>
            <h3>Sinta o cuidado do preparo com ingredientes selecionados</h3>
          </div>
        </Banner>

        <h1>Refeições</h1>

    <div className="carousel-wrapper">
        <Carousel responsiveLayout={carouselMobile} mobileBreakpoint={1}>
          {
            mainDishes.map(dish => (
              <Carousel.Item key={dish.id}>
                <Card data={dish}/>
              </Carousel.Item>
            ))
          }
        </Carousel>
        </div>

        <h1>Sobremesas</h1>

        <Carousel responsiveLayout={carouselMobile} mobileBreakpoint={1}>
          {
            desserts.map(dessert => (
              <Carousel.Item key={dessert.id}>
                <Card data={dessert}/>
              </Carousel.Item>
            ))
          }
        </Carousel>

        <h1>Bebidas</h1>

        <Carousel responsiveLayout={carouselMobile} mobileBreakpoint={1}>
          {
            drinks.map(drink => (
              <Carousel.Item key={drink.id}>
                <Card data={drink}/>
              </Carousel.Item>
            ))
          }
        </Carousel>
      </Content>

      <Footer />

    </Container>
  )
}