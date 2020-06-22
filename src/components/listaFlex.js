import Reac from 'react';
import { ScrollView, View, FlatList, Text} from 'react-native';

const alunos = [
    {id: 1, nome: 'João', nota: 6.7},
    {id: 2, nome: 'Pedro', nota: 8.9},
    {id: 3, nome: 'Maria', nota: 0.1},
    {id: 4, nome: 'Paulo', nota: 2.3},
    {id: 5, nome: 'Jose', nota: 4.5},
    {id: 6, nome: 'Diego', nota: 6.8},
    {id: 7, nome: 'Rodrigo', nota: 7.9},
    {id: 8, nome: 'Sophia', nota: 8.0},
    {id: 9, nome: 'Gisele', nota: 9.1},

    {id: 10, nome: 'João', nota: 6.0},
    {id: 11, nome: 'João', nota: 6.7},
    {id: 12, nome: 'Pedro', nota: 8.9},
    {id: 13, nome: 'Maria', nota: 0.1},
    {id: 14, nome: 'Paulo', nota: 2.3},
    {id: 15, nome: 'Jose', nota: 4.5},
    {id: 16, nome: 'Diego', nota: 6.8},
    {id: 17, nome: 'Rodrigo', nota: 7.9},
    {id: 18, nome: 'Sophia', nota: 8.0},
    {id: 19, nome: 'Gisele', nota: 9.1},
]

const itemEstilo = {
    paddingHozintal: 15,
    height: 50,
    backgroundColor: '#ddd',
    borderWidth: 0.5,
    borderColor: '#222',

    //Flex
    //justifyContent: 'space-around',
    alignItems : 'center',    
    flexDirection: 'row',
    justifyContent: 'space-between',
    //justifyContent: 'space-around',
    //alignItems: 'flex-end',
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItems = ({item}) => {
        return <Aluno {...item} />
    }

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem}
            keyExtractor={(_,index) => index.toString()} />
        </ScrollView>
    )
}