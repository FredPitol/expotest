
// criar botão / Button

import React, {useState} from 'react'
import {Button, Text, TextInput} from 'react-native'
import Estilo from './styles'

// propriedades: title , onPress

//export default props =>{
export default ({min, max}) =>{  
    const initialText = "Digite numero inteiro";
    const [text, saveInitialText] = React.useState(initialText);

    //criar meu estado
    const [aleatorio, setNumero] = useState(0)  
    const [novoMin, setNovoMin] = useState(0)

    function SPR_executar(){
        const delta = max - novoMin + 1
        let aleatorio = parseInt(Math.random() * delta) + novoMin
        if (aleatorio % 2 == 0)
          aleatorio += 1
        setNumero(aleatorio) 
    }
    
    return (
        <>
            {/*por um TextInput e ler os valores min e max deles*/}
             <TextInput
              style={Estilo.input}
              onChangeText={text => {
                // Fazer verificação do tipo do dado aqui!
                const newNumber = Number(text)

                if (isNaN(newNumber)) {
                  saveInitialText('Digite números, não palavras!')
                  setTimeout(() => saveInitialText(''), 2000)
                } else {
                  saveInitialText(text)
                  //setNumero(Number(text))
                  setNovoMin(newNumber)
                }
              }}
              onFocus={() => saveInitialText('')}
              onBlur={() => saveInitialText(initialText)}
              value={text}
            />

            <Button 
                title="Gerar número aleatorio  ímpar!!!" 
                onPress={SPR_executar} // referência da funcao
            />  

            <Text style={Estilo.fontBig}>
              O valor aleatorio entre {novoMin} e {max} é {aleatorio}
            </Text>

        </>    
    )

}