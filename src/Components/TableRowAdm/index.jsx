import { Container } from './styles'

import downArrow from '../../assets/downArrow.svg'

import { api } from '../../services/api'

export function TableRowAdm({order, ...rest}) {
    async function handleUpdateStatus(id) {
        await api.put(`http://localhost:3333/orders/${id}`)
    }

    return (
        <Container>

            <div id='first-child'>
                <div className='select-box'>
                    <select name="option" id="option" value={order.status} onChange={handleUpdateStatus(order.id)}>
                        <option value="">Selecione</option>
                        <option value="1">Pendente</option>
                        <option value="2">Preparando</option>
                        <option value="3">Entregue</option>
                    </select>
                    <img src={downArrow} alt="" />
                </div>
            </div>
            <div>
                <span>00000{order.id}</span>
            </div>
            <div >
                <span>{order.details}</span>
            </div>
            <div >
                <span>{order.created_at}</span>
            </div>

        </Container>
    )
}