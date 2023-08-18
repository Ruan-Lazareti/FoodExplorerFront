import { Container, LogOut } from './styles'
import { useAuth } from '../../hooks/authContext'

import logo from '../../assets/logo.svg'
import orderIcon from '../../assets/orderIcon.svg'
import logout from '../../assets/logout.svg'
import { FiSearch } from 'react-icons/fi'

import { Button } from '../../Components/Button'
import { Input } from '../../Components/Input'

import plusIcon from '../../assets/plus.svg'

import { useNavigate } from 'react-router-dom'

export function Header() {
    const { user, signOut } = useAuth()
    const navigate = useNavigate()

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

    if(user.isAdm === 0 && buttons) {
        buttons.firstChild.classList.add("hidden")
    } else if (user.isAdm === 1 && buttons) {
        buttons.lastChild.classList.add("hidden")
    }


    return (
        <Container>
            <div>
                <img src={logo} alt="logo empresa" />
                <h1>food explorer</h1>
            </div>

            <Input icon={FiSearch} placeholder="Busque por pratos ou ingredientes" type="text" />

            <div className="button-wrapper">
                <Button loading={false} title="Adicionar Prato" picture={plusIcon} onClick={handleAddDish}/>
                <Button loading={false} title="Pedidos (0)" picture={orderIcon}  onClick={handleOrders}/>
            </div>

            <LogOut onClick={signOut}>
                <img src={logout} alt=""/>
            </LogOut>
        </Container>
    )
}