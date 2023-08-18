import { Container } from './styles'

export function FormInput({ title, ...rest }) {
    return (
        <Container>
            <label htmlFor={title}>
                { title }
                <input {...rest} />
            </label>

        </Container>
    )
}