import React, { Fragment } from 'react';
import { View, Text} from 'react-native;';

const fonte = {style: {fontSize: 30}}

function filhosComProps (props){
    return React.Children.map(props.chldren, 
        c => React.cloneElement(c, {...props, ...c.props}))
}

export const Filho = props =>

    <View>
        <Text {...fonte}>Filho: {props.nome} {props.sobrenome}</Text>
    </View>

export const Pai = props =>
    <View>
        <Text {...fonte}>Pai: {props.nome} {props.sobrenome}</Text>
        {/* {props.children} */}
        {filhosComProps(props)}
    </View>

export const Avo = props =>
    <View>
        <Text {...fonte}>Avô: {props.nome} {props.sobrenome}</Text>
        <Pai nome='Andrew' sobrenome={props.sobrenome}>
            <Filho nome='Roger'/>
            <Filho nome='George' />
            <Filho nome='Cris'/>
        </Pai>
        <Pai {...props} nome='Jonh'>
            <Filho nome='Mary' />
            <Filho nome='Paul' />
        </Pai>

    </View>

export default Avo