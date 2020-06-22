import React ,{Component}from 'react';
import { Text, View, TextInput} from 'react-native';
import Padrao from '../styles/padrao';

export const Entrada = props =>
    <View>
        <TextInput value={props.text}
            style={Padrao.input}
            onChangeText={props.chamarQuandoMudar} />
    </View>

export class TextoSincronizado extends Component {
    state = {
        texto: ''
    }

    alteraTexto = texto => {
        this.setState({texto})
    }
    render( ){
        <View>
            <Text style={Padrao.fonte40}>{this.state.texto}</Text>
            <Entrada texto = {this.state.texto} 
                chamarQuandoMudar={this.alteraTexto} />
        </View>
    }
}