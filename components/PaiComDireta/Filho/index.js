
// Filho vai exibir os paramentros passados pelo pai

import React from 'react'
import {View, Text} from 'react-native'
import Estilo from './styles'
export default (props) => {
    const {a,b} = props //props.a  ou props.b
    return(
        <>
            <Text style={Estilo.fontBig}> {a} </Text>
            <Text style={Estilo.fontBig}> {b} </Text>
        </>
    )
}