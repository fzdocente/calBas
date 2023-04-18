import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    fondo:{
        backgroundColor:'powderblue',
        borderWidth:2,
        borderColor:'blue',
        width:'100%',
        borderRadius:10
    },
    inputs:{
        width:200,
        height:50,
        padding:10,
        borderWidth:2,
        borderColor:'blue',
        textAlign:'center',
        borderRadius:10
    },
    buttons:{
        height:50,
        width:50,
        borderRadius:10,
        padding:10,
        justifyContent:'center',
        alignItems:'center'}
  });

  export {styles}