
// Exercicio agora:
// Criar um componente (Aleatorio)
// vai passar dois valores: min e max
// vai gerar um valor aleatorio entre min e max
// vai exibir este valor

import React from 'react'
import {Text} from 'react-native'
import Estilo from './styles'

// Math.randon()
// {min, max} desestruturação destructuring
// props : props.min ou props.max
// ou dentro do componente
//  const {min,max} = props
export default ({min, max}) =>{
  
    const delta = max - min + 1
    let aleatorio = parseInt(Math.random() * delta) + min
    if (aleatorio % 2 == 0)
        aleatorio += 1
    return (
        <Text style={Estilo.fontBig}>
            O valor aleatorio entre {min} e {max} é {aleatorio}
        </Text>
    )
}