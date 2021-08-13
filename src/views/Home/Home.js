import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import estiloHome from './estiloHome';


function Home({ navigation }) {

    const openAbout = () => {
        navigation.navigate('About')
    }
    
    return (
       
        <View >
                <LinearGradient colors={['#F2C438', '#F6DCA9']} style={estiloHome.header}>
                        <Image
                                source={require('../../../assets/imagens/logo.png')} 
                                style={estiloHome.logo}
                        />
                </LinearGradient>
                <View style={{height: 70}} />
                <View style={estiloHome.fundo}>
                
                        <Text style={estiloHome.texto}> Starployee</Text>

                    <View style={estiloHome.caixaTexto}>
                        <Text>Rede social </Text> 
                        <Text>Para startups</Text>
                    </View>
                </View>

                <View style={estiloHome.section}>
                    <TouchableOpacity onPress={openAbout} style={estiloHome.botao1}>
                            <Text style={estiloHome.botaoTexto1}>Sobre</Text>
                    </TouchableOpacity>

                    <View style={{height: 40}} /> 
                </View>
        </View>
    )
}

export default Home;
