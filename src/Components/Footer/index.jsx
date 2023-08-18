import { Container } from './styles'

import logoFooter from '../../assets/logo_footer.svg'

export function Footer() {
    return (
        <Container>
            <div>
                <img src={logoFooter} alt="logo empresa" />
                <h1>food explorer</h1>
            </div>

            <div className='end'>
            <span>© 2023 - Todos os direitos reservados.</span>
            <a href="https://instagram.com/ruan_lazareti" target='_blank'>@ruan_lazareti</a>
            </div>
        </Container>
    )
}