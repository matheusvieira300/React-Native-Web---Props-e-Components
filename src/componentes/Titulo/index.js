import styled from "styled-components"

//efetuando um componente reutilizável, conceito de props 
export const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${props => props.cor || '#000'}; //se passar props beleza, se não passar #000 a cor será está, nome da props cor
    font-size: ${props => props.tamanhoFonte || '18px'};// nome da props tamanhoFonte
    text-align: ${props => props.alinhamento || 'center'};// nome da props alinhamento
    margin: 0;
`