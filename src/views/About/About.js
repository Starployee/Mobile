import React, { useState } from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import styleAbout from './styleAbout';
import { LinearGradient } from 'expo-linear-gradient';

function About() {
    return (
        <View style={styleAbout.container}>
            <LinearGradient colors={['#F2C438', '#F6DCA9']} style={styleAbout.header}>
                    <Image
                            source={require('../../../assets/imagens/logo.png')} 
                            style={styleAbout.logo}
                    />
            </LinearGradient>
            
            <Text style={styleAbout.titulo}>Sobre</Text>

            <View style={styleAbout.section}>
                <View style={styleAbout.line}></View>

                <View style={{
                    height: 30
                }} />

                <View style={styleAbout.box}>
                    <Text style={styleAbout.texto}>
                        Nós somos a Starployee, uma rede social empresarial focada na aliança entre startups e 
                        possíveis investidores ou empregados com interesses em comum ao dessas empresas, pois 
                        sabemos que é de fundamental importância trabalhar com aquilo que gostamos. Tendo isso em 
                        mente, queremos tornar essa conexão possível, melhorando o desenvolvimento e posicionamento 
                        dessas companhias no mercado. Queremos proporcionar isso ao mundo, a fim de que mais pessoas 
                        fiquem felizes ao acordar para mais um dia de trabalho, até porque isso é essencial para o bom 
                        crescimento das empresas. Daremos o nosso melhor, agindo com integridade e responsabilidade, 
                        sendo transparentes com nossos usuários, porque queremos mudar... ou melhor, revolucionar o 
                        mercado de startups!
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default About;
