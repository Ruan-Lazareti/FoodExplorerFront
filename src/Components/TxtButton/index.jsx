import { Container } from './styles'

export function TxtButton({picture, title, ...rest }) {
    return (
        <Container
        type='button'
        {...rest}>
            {picture && <img src={picture}alt="" />} 
            {title}
        </Container>
    )
}