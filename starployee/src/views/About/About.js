import React, { useState } from 'react';
import { Text, View, FlatList, ScrollView, Image } from 'react-native';
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
            
            <View style={styleAbout.section}>
                <Text style={styleAbout.titulo}>Sobre</Text>
                <View style={styleAbout.line}></View>
                <View style={{
                        height: 10
                    }} />
            </View>
            <ScrollView style={styleAbout.section}>

                <View style={styleAbout.box}>
                    <Text style={styleAbout.tituloB}> Participantes </Text>
                    <View style={styleAbout.participant}>
                        <Image
                                source={require('../../../assets/imagens/Eduardo.png')} 
                                style={styleAbout.Pphoto}
                        />
                        <Text style={styleAbout.textoB}> Eduardo Alexandre Pozzobom (aluno) </Text>
                    </View>
                    <View style={styleAbout.participant}>
                        <Image
                                source={require('../../../assets/imagens/gus.jfif')} 
                                style={styleAbout.Pphoto}
                        />
                        <Text style={styleAbout.textoB}> Gustavo Cabral Correia (aluno) </Text>
                    </View>
                    <View style={styleAbout.participant}>
                        <Image
                                source={require('../../../assets/imagens/hen.jpg')} 
                                style={styleAbout.Pphoto}
                        />
                        <Text style={styleAbout.textoB}> Henrique William (aluno) </Text>
                    </View>
                    <Text style={styleAbout.tituloB}> Objetivos </Text>
                    <Text style={styleAbout.texto}>
                        Nosso projeto visa trazer o matching (conceito de juntar pessoas por meio de seus interesses pessoais) para o mundo de startups. Faremos isso por meio de uma rede social que permite os candidatos a participar dessas companhias a partir destes parâmetros pessoais, assim como suas experiências.
                    </Text>
                    <Text style={styleAbout.tituloB}> Funcionalidades </Text>
                    <Text style={styleAbout.texto}>
                        Por meio da Starployee, os usuários podem criar organizações, investir em outras companhias, ingressar no mercado e divulgar startups. Tudo isso por meio do matching, citado anteriormente.
                    </Text>
                </View>
                <View style={{
                    height: 10
                }} />
            </ScrollView>
        </View>
    )
}

export default About;
