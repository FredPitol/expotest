
// Pai passa paramentros para o filho
import React from 'react'
import {View, Text} from 'react-native'
import Filho from './Filho'

export default (props) => {
    let x = 13 // parametros do Pai
    let y = 100 // parametros do Pai

    return(
        <>
            <Filho a={x} b={y} />
            <Filho a={x+100} b={y+10} />
        </>
    )
}