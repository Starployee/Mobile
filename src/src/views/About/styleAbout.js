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
      opacity: 0.5,
      borderRadius: 40,
      backgroundColor:'#CDC8C8',
      paddingLeft: 20,
      paddingRight: 20,
      alignItems: 'center'
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
      padding: 30
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
   }
});

  export default styleAbout;