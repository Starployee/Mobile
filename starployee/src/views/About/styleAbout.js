import { StyleSheet } from 'react-native';

const styleAbout = StyleSheet.create({
   container: {
       flex: 1
   },
   header: {
      height: 70,
      width: '100%',
      justifyContent: 'center',   
      alignItens: 'center',
      position: 'absolute',
      alignItems: 'center'
   },
   box: {
      height: '100%',
      borderRadius: 40,
      backgroundColor: '#a7a7a7',
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20
   },
   titulo: {
      paddingTop: 80,
      fontSize: 20,
      fontWeight: 'bold',
      paddingLeft: 60,
      fontFamily: 'Poppins'
   },
   section: {
      paddingLeft: 30,
      paddingRight: 30
   },
   texto: {
      fontSize: 10,
      fontFamily: 'Poppins',
      textAlign: 'justify',
      color: '#000',
      width: '100%',
      padding: 10,
      color: 'white'
    },
   logo: {
      height: 60,
      width: 60
   },
   line: {
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      fontSize: 40,
      fontWeight: 'bold',
      paddingLeft: 60
   },
   participant: {
      flexDirection: 'row',
      paddingBottom: 10
   },
   tituloB: {
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: 'Poppins',
      textAlign: 'center', 
      color: 'white',
      paddingBottom: 10,
      paddingTop: 10
   },
   Pphoto: {
      height: 30,
      width: 30,
      borderRadius: 30
   },
   textoB: {
      fontSize: 10,
      fontFamily: 'Poppins',
      color: '#000',
      width: '100%',
      color: 'white'
    }
});

  export default styleAbout;