import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, TextInput } from 'react-native';
import { View } from 'react-native-animatable';
/* import MapView from 'react-native-maps'; */
import { api } from '../../services/api';
import Estilos from '../../config/estilos';
import Mapa from './mapa'; 

export default function CapturarVertices(props) {
  const [latitude1, setLatitude1] = useState('');
  const [longitude1, setLongitude1] = useState('');
  const [latitude2, setLatitude2] = useState('');
  const [longitude2, setLongitude2] = useState('');
  const [latitude3, setLatitude3] = useState('');
  const [longitude3, setLongitude3] = useState('');
  const [latitude4, setLatitude4] = useState('');
  const [longitude4, setLongitude4] = useState('');
  const [showResult, setShowResult] = useState(false);
  const processo_id = props.navigation.state.params.processoDetalhe.processo_id;
  const utente_id = props.navigation.state.params.processoDetalhe.utente_id;

  function pegarVertice(coord, setFunction) {  
    navigator.geolocation.getCurrentPosition(position => {
        if(coord === 'lat'){
          setFunction(position.coords.latitude);
        }
        else {
          setFunction(position.coords.longitude);
        }
      }, 
      (err) => { alert(`GPS não conseguiu pegar localização. ${err.message}`); },
      { timeout: 30000 }
    );
  }
  function verificacaoDeVertices() {
    const latElon = [latitude1, longitude1, latitude2, longitude2, latitude3, longitude3, latitude4, longitude4];
    const result = latElon.map(item => {
      if(item === '') {
        return false;
      }
    });
    if(result.includes(false)) {
      return false;
    }
    return true;
  }

  return(
    <ScrollView style={Estilos.containerVertice}>
      
        <View style={Estilos.mapContainer}>
         <Text style={Estilos.mapBtnText}>1º vertice</Text>
         <View style={Estilos.mapInputBlock}>
             <TextInput style={Estilos.mapInput} 
                 placeholder='Latitude' autoCorrect={false} value={latitude1.toString()}
                 onFocus={() => { 
                   if(latitude1 === '') pegarVertice('lat', setLatitude1);
                 }}
                 onChangeText={ e =>  setLatitude1(e) }
             />
             <TextInput style={Estilos.mapInput} 
                 placeholder='Longitude' autoCorrect={false} value={longitude1.toString()}
                 onFocus={() => { 
                   if(longitude1 === '') pegarVertice('lon', setLongitude1);
                 }}
                 onChangeText={ e => setLongitude1(e) }
             />
         </View>
       </View>
       
       <View style={Estilos.mapContainer}>
         <Text style={Estilos.mapBtnText}>2º vertice</Text>
         <View style={Estilos.mapInputBlock}>
             <TextInput style={Estilos.mapInput} 
                 placeholder='Latitude' autoCorrect={false} value={latitude2.toString()}
                 onFocus={() => { 
                   if(latitude2 === '') pegarVertice('lat', setLatitude2);
                 }}
                 onChangeText={ e =>  setLatitude2(e) }
             />
             <TextInput style={Estilos.mapInput} 
                 placeholder='Longitude' autoCorrect={false} value={longitude2.toString()}
                 onFocus={() => { 
                   if(longitude2 === '') pegarVertice('lon', setLongitude2);
                 }}
                 onChangeText={ e => setLongitude2(e) }
             />
         </View>
       </View>
       
       <View style={Estilos.mapContainer}>
         <Text style={Estilos.mapBtnText}>3º vertice</Text>
         <View style={Estilos.mapInputBlock}>
             <TextInput style={Estilos.mapInput} 
                 placeholder='Latitude' autoCorrect={false} value={latitude3.toString()}
                 onFocus={() => { 
                   if(latitude3 === '') pegarVertice('lat', setLatitude3);
                 }}
                 onChangeText={ e =>  setLatitude3(e) }
             />
             <TextInput style={Estilos.mapInput} 
                 placeholder='Longitude' autoCorrect={false} value={longitude3.toString()}
                 onFocus={() => { 
                   if(longitude3 === '') pegarVertice('lon', setLongitude3);
                 }}
                 onChangeText={ e => setLongitude3(e) }
             />
         </View>
       </View>

       <View style={Estilos.mapContainer}>
         <Text style={Estilos.mapBtnText}>4º vertice</Text>
         <View style={Estilos.mapInputBlock}>
             <TextInput style={Estilos.mapInput} 
                 placeholder='Latitude' autoCorrect={false} value={latitude4.toString()}
                 onFocus={() => { 
                   if(latitude4 === '') pegarVertice('lat', setLatitude4);
                 }}
                 onChangeText={ e =>  setLatitude4(e) }
             />
             <TextInput style={Estilos.mapInput} 
                 placeholder='Longitude' autoCorrect={false} value={longitude4.toString()}
                 onFocus={() => { 
                   if(longitude4 === '') pegarVertice('lon', setLongitude4);
                 }}
                 onChangeText={ e => setLongitude4(e) }
             />
         </View>
       </View>

       <View style={Estilos.btnGroup}>
         <TouchableOpacity style={Estilos.btnSave}
            onPress={async () => { 
              /* if(!verificacaoDeVertices()){
                alert('Todos os vértices devem ser preenchidos.');
                return;
              } */
              const ponto = {
                latitude: [latitude1, latitude2, latitude3, latitude4],
                longitude: [longitude1, longitude2, longitude3, longitude4]
              };
              const response = await api.post(`/saveterreno/?processo_id=${processo_id}&utente_id=${utente_id}`, ponto);

              if(response.data){
                alert('Vértices guardados com sucesso!');
                return;
              }
              alert('Erro ao tentar guardar os vértices!');
              return;
            }
          }
         >
           <Text style={Estilos.detailsBtnText}>Guardar</Text>
         </TouchableOpacity>

         <TouchableOpacity style={Estilos.mapBtn}
           onPress={() => { 
              if(!verificacaoDeVertices()){
                alert('Todos os vértices devem ser preenchidos.');
                return;
              }
              else {
                setShowResult(!showResult);
              }
            }}
         >
           <Text style={Estilos.detailsBtnText}>{showResult? 'Ocultar mapa' : 'Ver no mapa'}</Text>
         </TouchableOpacity>
       </View>
       
      {
        showResult ? 
        <Mapa coordenadas={{
          lat: [latitude1, latitude2, latitude3, latitude4],
          lon: [longitude1, longitude2, longitude3, longitude4]
        }}/> 
        : null
      }           

   </ScrollView >
 );

}

CapturarVertices.navigationOptions = () => ({
  title: 'Capturar vértices',
      headerTintColor: "#fff",
      headerStyle:{
          backgroundColor: "#05375a",
      },
});
