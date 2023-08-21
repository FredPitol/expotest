// com indireta
// Pai-> filho -> Pai


import React, {useState} from 'react'
import {View, Text} from 'react-native'
import Estilo from './styles'
import Filho from './Filho'

export default (props) => {
    const[num, setNum] = useState(0)
    const[texto , setTexto] = useState("")
    function exibirValor(numero, texto){
        setNum(numero)
        setTexto(texto)
    }
    return(
        <>
            <Text style={Estilo.fontBig}> 
                {texto}{num} 
            </Text>
            <Filho 
                min={1}
                max={30}
                funcao={exibirValor}
            />
        </>
    )
}