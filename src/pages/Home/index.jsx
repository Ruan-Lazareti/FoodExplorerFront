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
  const [searchTerm, setSearchTerm] = useState('')
  const [mainDishes, setMainDishes] = useState([])
  const [drinks, setDrinks] = useState([])
  const [desserts, setDesserts] = useState([])
  const [loading, setLoading] = useState(true);

  const [searchResultsDish, setSearchResultsDish] = useState([])
  const [searchResultsDrink, setSearchResultsDrink] = useState([])
  const [searchResultsDessert, setSearchResultsDessert] = useState([])
  
  useEffect(() => {
    async function fetchData() {
      try {
        const mainResponse = await api.get(`/getters/main`);
        const drinkResponse = await api.get(`/getters/drink`);
        const dessertResponse = await api.get(`/getters/dessert`);
        
        setMainDishes(mainResponse.data);
        setDrinks(drinkResponse.data);
        setDesserts(dessertResponse.data);

        setSearchResultsDish(mainResponse.data)
        setSearchResultsDrink(drinkResponse.data)
        setSearchResultsDessert(dessertResponse.data)
        
        setLoading(false);
      } catch (error) {
        console.error('Error ao buscar dados:', error);
        setLoading(false); 
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    
    if(!loading) {
    console.log(mainDishes)
    let resultsMainDishes = mainDishes.filter(dish => dish.name.toLowerCase().includes(searchTerm.toLowerCase()))
    let resultsDrinks = drinks.filter(drink => drink.name.toLowerCase().includes(searchTerm.toLowerCase()))
    let resultsDesserts = desserts.filter(dessert => dessert.name.toLowerCase().includes(searchTerm.toLowerCase()))
    
    
    
    setSearchResultsDish(resultsMainDishes)
    setSearchResultsDrink(resultsDrinks)
    setSearchResultsDessert(resultsDesserts)
    }
    
  }, [searchTerm], mainDishes, drinks, desserts, loading)

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
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

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
            searchResultsDish.map(dish => (
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
            searchResultsDessert.map(dessert => (
              <Carousel.Item key={dessert.id}>
                <Card data={dessert}/>
              </Carousel.Item>
            ))
          }
        </Carousel>

        <h1>Bebidas</h1>

        <Carousel responsiveLayout={carouselMobile} mobileBreakpoint={1}>
          {
            searchResultsDrink.map(drink => (
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