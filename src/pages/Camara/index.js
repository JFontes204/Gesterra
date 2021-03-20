import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
//import api from '../services/api';
import Estilos from '../../config/estilos';

export default function CamaraComponent() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => { (async () => { 
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>Não tem permissão para aceder a câmera.</Text>;
  }
  return (
    <View style={Estilos.camaraViewContainer}>
      <Camera style={Estilos.camaraContainer} type={type}>
        <View style={Estilos.camaraBtnContainer}>
          <TouchableOpacity
            style={Estilos.camaraBtn}
            onPress={() => { 
                setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back);
            }}>
            <Text style={Estilos.camaraBtnText}> Trocar </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Estilos.camaraBtn}
            onPress={() => { 
               // Camera.takePictureAsync();
            }}>
            <Text style={Estilos.camaraBtnText}> Capturar </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

CamaraComponent.navigationOptions = () =>({
      title: 'Fazer foto',
      headerTintColor: "#fff",
      headerStyle:{
          backgroundColor: "#05375a",
      },
  }); 
