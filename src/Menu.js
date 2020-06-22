import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Simples from './components/simples';
import ParImpar from './components/parImpar';
import InverterTexto, { MegaSena } from './components/multi';
import Contator from './components/contador';
import Plataformas from './components/plataformas';
import ValidarProps from './components/validarProps';
import Evento from './components/evento';
import  Avo from './components/comunicaoDireta';
import TextoSincronizado from './components/comunicacaoIndireta';
import ListaFlex from './components/listaFlex';
import Flex from './components/flex';


export default createDrawerNavigator({
    Flex: {
        screen: Flex
    },
    ListaFlex: {
        screen: ListaFlex,
        navigationOptions: {title: 'Lista Flex Box'}
    },
    TextoSincronizado: {
        screen: <TextoSincronizado />,
        navigationOptions: {title: 'Texto Sincronizado'}
    },
    Avo : {
        screen: () => <Avo nome='Steve' sobrenome='Silva' />
    },
    Evento: {
        screen: Evento
    },
    ValidarProps: {
        screen: () => <ValidarProps ano={18} />
    },
    Plataforma: {
        screen: Plataformas
    },
    Contator: {
        screen: () => <Contator numeroIncial={100}/>
    },
    MegaSena: {
        screen: () => <MegaSena numeros={6} />,
        navigationOptions: {title: 'Mega-Sena'}
    },
    InverterTexto: {
        screen: () => <InverterTexto texto='React Native!' />
    },
    ParImpar: {
        screen: () => <ParImpar numero={30} />,
        navigationOptions: {title: 'Par & Impar'}
    },
    Simples: {
        screen: () => <Simples texto='Flexivel !!!'/>
    }

},{ drawerWidth: 300 })