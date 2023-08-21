
import React, {useState} from 'react'
import {Text, Button} from 'react-native'
import Estilo from './styles'

// vou usar useState que eh um hook (gancho)

export default ({inicial=0, passo=1}) =>{
    
    //criar meu estado
    const [numero, setNumero] = useState(inicial)

    const inc = () => setNumero(numero +  passo)
    const dec = ()=> setNumero(numero - passo)

    return(
        <>
            <Text style={Estilo.fontBig}>
                {numero}
            </Text>

            <Button color={"red"} title="+" onPress={inc} />
            <Button color="#841584" title="-" onPress={dec} />

        </>
    )

}