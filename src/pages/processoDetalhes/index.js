import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Estilos from '../../config/estilos';
import {Container, ContainerScrollView} from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SlideCard from '../SlideCard';
import { api, url } from '../../services/api';

export default function ProcessoDetalhes({ navigation }) {
    const processo_id = navigation.state.params.processo.id
    const [hasTerreno, setHasTerreno] = useState(null);
    
    useEffect(() => {
        maisDetalhes();
    }, []);    

    async function maisDetalhes() {
        const response = await api.get(`/ctrlprocessoterreno?processo_id=${processo_id}`);
        setHasTerreno(response.data);
    }
    return (
    <View style={Estilos.containerDetalhe}>
        <View style={Estilos.detalheContainer}>
        <View style={Estilos.processoContainerHeader}>
            <FontAwesome style={Estilos.icon}
                            name="user-o"
                            color="#05375a"
                            size={20}
                        />
            <Text style={Estilos.processoTitle1}>{navigation.state.params.processo.utente}</Text>
        </View>
        {/* <Image style={Estilos.img} source={{uri:`${url}/foto_utente/${navigation.state.params.processo.foto.trim()}`}}/> */}
            <Text style={Estilos.processoDescription}><Text style={Estilos.label}>Processo:</Text> 
            <Text style={Estilos.values}>{' ' + navigation.state.params.processo.codigo}</Text>
            </Text>
            <Text style={Estilos.processoDescription}><Text style={Estilos.label}>Assunto:</Text>
            <Text style={Estilos.values1}>{' ' + navigation.state.params.processo.assunto}</Text>
            </Text>
            <Text style={Estilos.processoDescription}><Text style={Estilos.label}>Criado em:</Text>
                {' ' + navigation.state.params.processo.data_criacao}
            </Text>
            <Text style={Estilos.processoDescription}><Text style={Estilos.label}>Estado processo:</Text>
                {' Captura de vértices'}
            </Text>
            <Text style={Estilos.processoDescription}><Text style={Estilos.label}>Nº de fotos:</Text>
                {' 3'}
            </Text>
        </View>
        <View style={Estilos.btnContainer} >       
            {
                hasTerreno === 1 ?
                (<TouchableOpacity style={[Estilos.detailsBtn, {backgroundColor: '#05375a'}]} 
                    onPress={() => { 
                        navigation.navigate('CapturarVertices',
                        {
                            processoDetalhe: { 
                                processo_id: navigation.state.params.processo.id,
                                utente_id: navigation.state.params.processo.id_utente
                            }
                        })
                    }}>
                    <Text style={Estilos.detailsBtnText}>
                        Capturar vértices 
                    </Text>
                </TouchableOpacity>)
                : null
            }
            <TouchableOpacity style={Estilos.detailsBtn} onPress={() => { navigation.navigate('Camara') }}>
                <Text style={Estilos.detailsBtnText}>
                   Câmara
                </Text>
            </TouchableOpacity>
        </View>
        <Container>
            <ContainerScrollView>
                <SlideCard />
            </ContainerScrollView>
        </Container>
    </View>
);
}
ProcessoDetalhes.navigationOptions = ({ navigation }) => ({
    title: `Processo - ${navigation.state.params.processo.codigo}`,
    headerTintColor: "#fff",
    headerStyle:{
        backgroundColor: "#05375a",
    },
});

