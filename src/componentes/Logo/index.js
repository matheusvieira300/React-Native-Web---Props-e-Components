import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

// é possível criar seu próprio componente estilizado, só é necessário dizer qual tag html vc está editando
const LogoContainer = styled.div`
    display: flex; //alinhar verticalmente
    font-size: 30px; 
`

const LogoImage = styled.img`
    margin-right: 10px; //margin a direita
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImage
                src={logo}
                alt='logo' 
            />
            <p><strong>Alura</strong>Books</p>
       </LogoContainer>
    )
}

export default Logo