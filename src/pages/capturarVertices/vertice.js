import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Estilos from '../../config/estilos';


const Vertice = (props) => {
  /* const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  
  function pegarVertice(coord) {  
    navigator.geolocation.getCurrentPosition(position => 
      {
        const coords = position.coords;
        if(coord === 'lat'){ 
          pontos = coords.latitude
          setLatitude(coords.latitude);
        }
        else { 
          alert(pontos);
          setLongitude(coords.longitude);
        }
      }, (err) => { alert(`GPS não conseguiu pegar localização. ${err.message}`); },
      { timeout: 30000 }
    );
  }
 */
  return (
    <View style={Estilos.mapContainer}>
      <Text style={Estilos.mapBtnText}>{props.count}º vertice</Text>
      
      <View style={Estilos.mapInputBlock}>
          <TextInput style={Estilos.mapInput} 
              placeholder='Latitude' autoCorrect={false} value={props.lat}
              onFocus={() => { 
                if(props.lat === '') props.vertices('lat');
              }}
              onChangeText={ e => { props.lat = e }}
          />
          <TextInput style={Estilos.mapInput} 
              placeholder='Longitude' autoCorrect={false} value={props.lon}
              onFocus={() => { 
                if(props.lon === '') props.vertices('lon');
              }}
              onChangeText={ e => { props.lon = e }}
          />
      </View>
    </View>
  );
}

export default Vertice;