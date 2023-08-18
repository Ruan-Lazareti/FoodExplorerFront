import { Container } from './styles'

export function TableHeader() {
    return (
        <Container>

            <div id='first-child'>
                <h1>Status</h1>
            </div>
            <div>
                <h1>Código</h1>
            </div>
            <div>
                <h1>Detalhamento</h1>
            </div>
            <div id='last-child'>
                <h1>Data e Hora</h1>
            </div>
            
        </Container>
    )
}