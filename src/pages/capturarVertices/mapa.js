import React, { Component } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Estilos from '../../config/estilos';

Mapa.navigationOptions = {
  title: 'Mapa',
  headerTintColor: '#fff',
  headerStyle: {
      backgroundColor: '#05375a',
  }
};

export default function Mapa(props) {
  
  const { coordenadas } = props;

  return(
    <View style={Estilos.mapContainer}>
                
      <MapView  style={Estilos.mapStyle} region={{ latitude: parseFloat(coordenadas.lat[0]), longitude: parseFloat(coordenadas.lon[0]), latitudeDelta:0.001, longitudeDelta:0.001 }}>
      {
        coordenadas.lat.map((item, index) => {
          return (
            <Marker key={index} coordinate={{latitude: parseFloat(item), longitude: parseFloat(coordenadas.lon[index]) }} />
          );
        })
      }
      </MapView>
    </View>
  );
}