import { Container } from './styles'

import parmaToast from '../../assets/dishes/parma-toast.png'

export function HorizontalCard({order, ...rest}) {
    return (
        <Container>
            <img src={parmaToast} alt="foto do prato" />

            <div>
                <h1>1 x {order.details}</h1>
                <button>Excluir</button>
            </div>

            <h4>{order.price}</h4>
        </Container>
    )
}