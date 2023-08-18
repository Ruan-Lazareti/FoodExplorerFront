import { Container } from './styles'

export function TableRow({order, ...rest}) {
    return (
        <Container>

            <div id='first-child'>
                <div className='pendent'></div>
                <span>{order.status}</span>
            </div>
            <div>
                <span className='center_text'>{order.id}</span>
            </div>
            <div >
                <span >{`1x: ${order.details}`}</span>
            </div>
            <div >
                <span className='center_text'>{order.created_at}</span>
            </div>
            
        </Container>
    )
}