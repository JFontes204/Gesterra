import React, { Component } from 'react';
import LoginComponent from './loginComponent';
import { api } from '../../services/api'


export default class Login extends Component {

    constructor(props){
        super(props)
    }
    
    tryLogin = async (username, password) => {

        if(username && password){
            username.toLowerCase();
            const response = await api.get(`/login?username=${username}&password=${password}`); 
            const user = response.data;
            
            if(user['id']){
                this.props.navigation.navigate('Processos', {user: user});
            } else {
                alert('Nome de utilizador ou palavra-passe errada!');
            }
        } else {
            alert('Preenche os campos nome de utilizador e palavra-passe.')
        } 
    };
    
    static navigationOptions = {
       // title: 'Gesterra Mobile - Login',
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: '#05375a',
        }
    };

    render(){
        return <LoginComponent onPress={ this.tryLogin } />
    }
}