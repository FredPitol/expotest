
// import React from 'react'
import React, {Fragment} from 'react'
import {View, Text} from 'react-native'
import Estilo from './styles'


// export default ({principal, secundario}) =>{
    
//     return (
//         <View> 
//             <Text style={Estilo.fontBig}>
//                 {principal}
//             </Text>

//             <Text>
//                 {secundario}
//             </Text>
//         </View>  
//     )
// }

// export default ({principal, secundario}) =>{
    
//     return (
//         <React.Fragment>
//             <Text style={Estilo.fontBig}>
//                 {principal}
//             </Text>

//             <Text>
//                 {secundario}
//             </Text>
//         </React.Fragment>
        
//     )
// }

// export default ({principal, secundario}) =>{
    
//     return (
//         <Fragment>
//             <Text style={Estilo.fontBig}>
//                 {principal}
//             </Text>

//             <Text>
//                 {secundario}
//             </Text>
//         </Fragment>
        
//     )
// }

export default ({principal, secundario}) =>{
    
    return (
        <> {/* Fragmento */}
            <Text style={Estilo.fontBig}>
                {principal}
            </Text>

            <Text>
                {secundario}
            </Text>
        </>
        
    )
}