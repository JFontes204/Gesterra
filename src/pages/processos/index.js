import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity,
        ActivityIndicator,Image } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { api, url } from '../../services/api';
import Estilos from '../../config/estilos';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default class Processos extends Component {

  constructor(props){
    super(props);
    this.state = {
      processos: [],
      todos: [],
      termo: '',
      loading: false,
      data: [],
      error: null,
    };
  }

static navigationOptions = {
  title: 'Processos',
  headerTintColor: '#fff',
  headerStyle: {
      backgroundColor: '#05375a',
  }
};
  componentDidMount(){
    this.loadProcessos();
  }

  loadProcessos = async (page = 1) => {
    
    const response = await api.get('/getprocesso');  
    this.setState({ processos: response.data }); 
    this.setState({ todos: response.data });
  }
  pesquisarProcesso = (termo) => {
    this.setState({ termo });
    if(termo.length == 0){
      this.setState({ processos: this.state.todos });
      return;
    }
    let pesquisavel = this.state.todos;
    this.setState({ processos: pesquisavel.filter( p => {
      if(p.utente.includes(termo) || p.codigo.includes(termo) || p.assunto.includes(termo)){ 
        return p; 
      }})
    });
  }
  renderHeader = () => {
    const { termo } = this.state;
    return(
      <SearchBar
        placeholder="Pesquisa aqui..." 
        containerStyle={Estilos.containerPesquisa} 
        inputContainerStyle={Estilos.pesquisa}
        value={termo}
        onChangeText= {this.pesquisarProcesso}
      />
    )
  }
  renderFooter = () => {
    if(!this.state.loading) return null;

    return (
      <View style={Estilos.sbarFooter}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  }

  renderItem = ({ item }) =>{
    const { user } = this.props.navigation.state.params;
    return(
      <View style={Estilos.processoContainer}>
        <View style={Estilos.processoContainerHeader}>
        <FontAwesome style={Estilos.icon}
                            name="user-o"
                            color="#05375a"
                            size={20}
                        />
        <Text style={Estilos.processoTitle1}>{item.utente}</Text>
        </View>
       {/*  <Image style={Estilos.img} source={{uri:`${url}/foto_utente/${item.foto.trim()}`}}/> */}
        <Text style={Estilos.processoDescription}><Text style={Estilos.label}>Assunto:</Text> <Text style={Estilos.values1}>{item.assunto}</Text></Text>
        <Text style={Estilos.processoDescription}><Text style={Estilos.label}>Código: </Text><Text style={Estilos.values}>{item.codigo}</Text></Text>
        
        <TouchableOpacity
            style={Estilos.processoBtn} 
            onPress={() => { this.props.navigation.navigate('ProcessoDetalhes', { processo: item })
            }}
        >
          <Text style={Estilos.processoBtnText}>Mais info.</Text>
        </TouchableOpacity>
      </View>
    );
  }

 render(){
    return(
        <View style={Estilos.processoBigContainer}>
             <FlatList
              data={this.state.processos}
              keyExtractor={item => item.id}
              renderItem={ this.renderItem} 
              ListFooterComponent={this.renderFooter} 
              ListHeaderComponent={this.renderHeader}
              // horizontal={true}
              /> 
        </View>
    ); 
  }
}