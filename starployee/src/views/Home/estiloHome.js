import { StyleSheet } from 'react-native';

const estiloHome = StyleSheet.create({
   
   header: {
      height: 70,
      width: '100%',
      justifyContent: 'center',   
      alignItens: 'center',
      position: 'absolute',
      alignItems: 'center'
   },

   logo: {
      height: 60,
      width: 60
   },
   
   section: {
      alignItems: 'center'
   },
   fundo: {
       paddingTop: 70,
       flexDirection: 'column',
       justifyContent: 'space-evenly',
       alignItems: 'center',
       width: '100%',
       height: '100%'
   },
   botao1: {
      opacity: 0.5,
      borderRadius: 100,
      backgroundColor:'black',
      paddingLeft: 20,
      paddingRight: 20,
      alignItems: 'center'      
   },
   
   botaoTexto1: {
      fontSize: 35,
      color: '#FFFFFF',
      fontFamily: 'Poppins',

   },
   texto: {
      fontSize: 40,
      alignItems: 'center',
      fontFamily: 'Poppins'
   },
   caixaTexto: { 
       backgroundColor:'white',
       fontFamily: 'Poppins',
       fontSize: 25,
       textAlign: 'center',
       padding: 10,
       borderRadius: 10
   }
});

  export default estiloHome;