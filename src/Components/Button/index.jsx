import { Container } from './styles'

export function Button({ picture, title, loading, ...rest }) {
    return (
        <Container
        type='button'
        disable={loading}
        {...rest}>
           {picture && <img src={picture}alt="" />} 
            {loading ? 'Loading' : title}
        </Container>
    )
}