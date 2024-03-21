import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { livros } from './dadosPesquisa' // export sem default pois é apenas uma const

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 470px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    p {
        width: 200px;
    }

    img {
        width: 100px;
    }

    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])

    // onBlur evento, ao usuário clicar fora do campo de digitação 
    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value //target.value com esse pârametro descobrimos sempre o que foi digitado no campo
                    const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado)) // includes para verificar se o texto repassado 
                    //está incluso em outro texto ele é tipo o equals do java
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            { livrosPesquisados.map( livro => (
                <Resultado>
                    <img src={livro.src}/>
                    <p>{livro.nome}</p>
                </Resultado>
            ) ) }
        </PesquisaContainer>
    )
}

export default Pesquisa