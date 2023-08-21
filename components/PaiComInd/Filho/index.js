import React from 'react'
import {View, Text, Button} from 'react-native'
import Estilo from './styles'

//export default ({min, max, funca01, funcPrimo}) => {
export default (props) => {

    //desestruturacao 
    const {min: meuMinimo,max} = props // props.min ou props.max
console.log("meuMin = ", meuMinimo)
    function geraNumero( meuMinimo , max){
        const fator = max - meuMinimo +1
        return parseInt(Math.random() * fator) + meuMinimo
    }

    return(
        <Button 
            title="Executar"
            onPress={function(){
                const n = geraNumero(meuMinimo, max)
                props.funcao(n, 'Novo número é =>  ' )
            }}
        />
    )
}