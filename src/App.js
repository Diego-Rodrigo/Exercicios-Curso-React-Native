import React,{ Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Simples from './components/simples';
import ParImpar from './components/parImpar';
import InverterTexto, { MegaSena } from './components/multi';


export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        
          <Simples texto="Flexivel!!" />
          <ParImpar numero={33}/>
          <InverterTexto texto='React Native!' />
          <MegaSena numeros={6} />
      </View>
    )
  }
 
}

const styles =  StyleSheet.create({

    container:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    f20:{
      fontSize: 40
    }
})