import React from 'react';
import { View, Text } from 'react-native';
import Padrao from '../styles/padrao';

function parOuImpar(num){
    /* if(num %2==0){
        return <Text style={Padrao.ex}>Par</Text>
    }else{
        return <Text style={Padrao.ex}>Impar</Text>
    } */
    const result = num % 2==0 ? 'Par' : 'Impar'
    return <Text style={Padrao.ex}>{result}</Text>
}

export default props =>
    <View>
        {parOuImpar(props.numero)}
        {/* {
            props.numero %2==0
            ?<Text style={Padrao.ex}>Par</Text>
            :<Text style={Padrao.ex}>Impar</Text>
        } */}
    </View>