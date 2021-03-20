import { StyleSheet, Dimensions } from 'react-native';

const Estilos = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fafafa'
    },
    list:{
      padding: 20,
    },

/* ============ Page Processo Details =================== */
  containerDetalhe:{
    flex:1,
    backgroundColor:'#ccc'
  },
    detalheContainer:{
      backgroundColor:'#fff',
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 5,
      padding: 2,
      margin: 5,
      marginTop: 10,
      paddingBottom:5,
    },
    btnContainer:{
      // flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 5,
      paddingRight:5,
      margin: 5,
      marginTop:1,
      backgroundColor:'#fff',
      height:81,
      borderRadius:5
    },
    galeriaContainer:{
      // flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 2,
      paddingRight:3,
      margin: 5,
      marginTop:1,
      paddingTop:2,
      backgroundColor:'#fff',
      height:81,
      borderRadius:5,
      height:300
    },
    detailsBtn:{
      height: 42,
      width:'49%',
      borderRadius: 5,
      backgroundColor: '#5db8fe',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20
    },
    detailsBtnText:{
      fontSize: 16,
      color: '#fff',
      fontWeight: 'bold'
    },
    sbarListItem:{
      borderBottomWidth: 0
    },
    
/* ============ Page Processo List =================== */
    
    processoBigContainer:{
      flex: 1,
      backgroundColor:'#ccc',
      padding: 10,
    },
    containerVertice:{
      flex: 1,
      backgroundColor:'#ccc',
    },
    containerPesquisa:{
      backgroundColor: '#fff',
      borderTopWidth: 0,
      borderBottomWidth: 0,
      width:'99.7%',
      borderRadius:5
    },
    pesquisa:{
      backgroundColor: '#fff',
      borderColor: '#5db8fe',
      borderWidth: 1,
      borderBottomWidth: 1,
    },
    processoContainer:{
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 5,
      padding:3,
      marginBottom:3,
      marginTop:3,
      backgroundColor: '#fff',
    },
    processoContainerHeader:{
      position:'relative',
      width:'100%',
      height:45,
      backgroundColor:'#05375a',
      borderTopLeftRadius:5,
      borderTopRightRadius:5,
      padding:6,
      flexDirection:'row',
      alignContent:'center'
    },
    processoTitle1:{
      fontSize: 14,
      fontWeight: "bold",
      color: '#fff',
      marginLeft: 30
    },
    
    processoTitle:{
      fontSize: 14,
      fontWeight: "bold",
      color: '#333',
      // marginTop: 10
    },
    processoDescription:{
      fontSize: 16,
      color: '#999',
      marginTop: 5,
      lineHeight: 24,
      marginLeft:5,
      marginRight:5,
      borderBottomColor:'#ccc',
      borderBottomWidth:1,
      borderStyle: 'dotted',
    },
    processoBtn:{
      height: 42,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#5db8fe',
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    processoBtnText:{
      fontSize: 16,
      color: '#05375a',
      fontWeight: 'bold',
  
    },
    sbarFooter:{
      paddingVertical: 20,
      borderTopWidth: 1,
      borderColor: '#ced0ce'
    },

/* ============ Page Login =================== */

    loginBackground:{ 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    containerLogo:{
        flex: 1,
        justifyContent: 'center',
    },
    loginContainer:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      borderColor:'#05375a',
      borderWidth:1,
      paddingTop: 50,
      backgroundColor:'rgba(255,255,255,0.1)',
    },
    loginInput:{
        backgroundColor: '#fff',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#05375a',
        padding:10,
        paddingLeft:30
    },
    loginBtn:{
        backgroundColor: '#5db8fe',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },
    loginBtnText:{
        color: '#fff',
        fontSize: 18
    },


/* ============ Page MapView =================== */

  mapStyle: {
    width: (Dimensions.get('window').width - 23),
    height: (Dimensions.get('window').height - 200),
  },
  mapContainer:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 0,
    paddingRight: 0,
    margin: 10,
  },
  mapBtnText:{
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
},
  mapInputBlock:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-around',
    backgroundColor:'#fff',
    padding: 0,
    margin: 0,
  },
  mapInput:{
    backgroundColor: '#fff',
    width: '45%',
    color: '#222',
    fontSize: 14,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#05375a',
    padding:10,
},
mapBtn:{
    backgroundColor: '#5db8fe',
    width: '49%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
},
btnSave:{
  backgroundColor: '#05375a',
  width: '49%',
  height: 45,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 7,
},
    
btnGroup:{
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 0,
  margin: 10,
  marginTop:5,
  paddingRight:3,
  paddingLeft:3,
  backgroundColor:'#fff',
  height:75,
  alignItems:'center',
  borderRadius:5,
},
/* ============ Page CamaraView =================== */

  camaraViewContainer: { 
    flex: 1
  },
  camaraContainer: { 
    flex: 1
  },
  camaraBtnContainer:{
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  camaraBtn:{
    flex: 0.2,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  camaraBtnText: { 
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
  },
  img:{
    width:50,
    height:50,
    borderRadius:5,
    position:'absolute',
    marginLeft:320,
    marginTop:25,
    borderColor:'#fff',
    borderWidth:1
  },
  label:{
    fontWeight:'bold',
    color:'#111'
  },
  values:{
    color:'#72ae3a'
  },
  values1:{
    color:'#ed6b75'
  },
  
  icon:{
    position:'absolute',
    zIndex:1,
    top:7,
    left:10,
    color:'#fff'  
  },
});

export default Estilos;