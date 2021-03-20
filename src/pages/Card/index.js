import React from 'react';
import {TouchableOpacity} from 'react-native';
import {url} from '../../services/api';
import {
    Container,
    Photo,
    ContainerSubtitle,
    SubtitleTitle,
    SubtitleDescription
} from './style';
const Card = ({dados,cont})=>{
    function nome(param){
        var nome=param.split(" ");
        var res;
        for (var i=0;i<nome.length;i++){
             res=nome[0]+' '+nome[i];   
        }
        return res;
    }
    return(
        <TouchableOpacity onPress={() => { this.props.navigation.navigate('ProcessoDetalhes', { processo: dados })}}>
            <Container>
                <Photo source={{uri:`${url}/foto_utente/${dados.foto.trim()}`}}/>
                <ContainerSubtitle>
                    <SubtitleTitle>{cont}</SubtitleTitle>
                    {/* <SubtitleDescription>{nome(dados.utente)}</SubtitleDescription> */}
                </ContainerSubtitle>
            </Container>
        </TouchableOpacity>
    );
}

export default Card;