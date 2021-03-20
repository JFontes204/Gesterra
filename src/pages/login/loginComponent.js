import React, { useState, useEffect } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import {    View,
            KeyboardAvoidingView, 
            Image,
            TextInput, 
            TouchableOpacity, 
            Text,
            Animated,
            Keyboard,
            StyleSheet
        } from 'react-native';
import Estilos from '../../config/estilos';

export default function Login (props) {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const [offset] = useState(new Animated.ValueXY({x: 300, y: 300}));
    const [opacity] = useState(new Animated.Value(0));
    const [logo] = useState(new Animated.ValueXY({x: 300, y: 300}));
    const [logo2] = useState(new Animated.ValueXY({x: 300, y: 300}));

    const [logoX, setLogoX] = useState(300);
    const [logoY, setLogoY] = useState(300);

    useEffect(() => {

        Login.KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
        Login.KeyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

        Animated.parallel([
            Animated.spring(offset.y, {
                toValue: 0,
                speed: 4,
                bounciness: 20,
                useNativeDriver: true
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true
            })
        ]).start();

    }, []);
    function keyboardDidShow(){
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 300,
                duration: 100,
                useNativeDriver: true
            }),
            Animated.timing(logo.y, {
                toValue: 300,
                duration: 100,
                useNativeDriver: true
            })
        ]).start(); 
        setLogoX(logo2.x._value);
        setLogoY(logo2.y._value);
    }
    function keyboardDidHide(){
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 300,
                duration: 100,
                useNativeDriver: true
            }),
            Animated.timing(logo.y, {
                toValue: 300,
                duration: 100,
                useNativeDriver: true
            })
        ]).start();
        setLogoX(logo.x._value);
        setLogoY(logo.y._value);
    }
    return(
        <KeyboardAvoidingView style={Estilos.loginBackground}>
            <View style={Estilos.containerLogo}>
                <Image style={{ width: logoX, height: logoY }} source={require('../../../assets/logo.png')} />
            </View>
            <Animated.View 
                style={[
                    Estilos.loginContainer,
                    { opacity: opacity, transform: [ {translateY: offset.y} ] }
                ]}
            >
                <Text style={styles.text_footer}>Utilizador</Text>
                <View style={styles.action}>
                <FontAwesome style={styles.icon}
                            name="user-o"
                            color="#05375a"
                            size={20}
                        />
                <TextInput style={Estilos.loginInput} 
                    autoCorrect={false} value={username}
                    onChangeText={ (username) => setUsername(username)}
                />
                </View>

                <Text style={styles.text_footer}>Senha</Text>
                <View style={styles.action}>
                <Feather 
                        style={styles.icon}
                        name="lock"
                        color="#05375a"
                        size={20}
                        />
                <TextInput style={Estilos.loginInput} 
                    autoCorrect={false}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={ (password) => setPassword(password)}
                />
                </View>
                <TouchableOpacity style={Estilos.loginBtn} 
                    onPress={() => props.onPress(username, password) } >
                    <Text style={Estilos.loginBtnText}>Login</Text>
                </TouchableOpacity>
            </Animated.View>
        </KeyboardAvoidingView>
    );
}

var styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#05375a'
    },
    header:{
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:20,
        paddingBottom:50
    },
    footer:{
        flex:2,
        backgroundColor:'white',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:20,
        paddingVertical:20
    },
    text_header:{
        color:'white',
        fontWeight:'bold',
        fontSize:30
    },
    text_footer:{
        color:'#05375a',
        fontSize:16,
        alignSelf:'flex-start',
        paddingLeft:20
    },
    action:{
        flexDirection:'row',
        justifyContent:'flex-start',
        // marginTop:10,
        // borderBottomWidth:1,
        borderBottomColor:'#f2f2f2',
        paddingBottom:5,
        position:'relative'
    },
    icon:{
      position:'absolute',
      zIndex:1,
      top:16,
      left:10  
    },
    textInput:{
        flex:1,
        paddingLeft:10,
        color:'#05375a'
    },
    button:{
        alignItems:'center',
        marginTop:50
    },
    signIn:{
        width:'100%',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:'#5db8fe',
    },
    textSign:{
        color:'white',
        fontWeight:'bold',
        fontSize:18
    }
});