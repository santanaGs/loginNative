import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native"

import { ContainerLogin, ImageBack, BackgroundImage, WelcomeText, BackgroundFirst, WelcomeTextDescription, InputContainer, InputLabel, InputContent, ButtonAcessar, TextButton, ButtonCadastrar, TextButtonCadastrar } from "./styles"

import firebase from "firebase";

import { useFonts } from 'expo-font';

export const Register = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function register_function() {
        await firebase.auth().createUserWithEmailAndPassword(email, senha).then((value) => {
            navigation.navigate('Login')
            alert("Cadastrado com Sucesso!!!")
        }).catch(() => {
            alert('Ops ... algo deu errado')
        })

        setEmail('');
        setSenha('');
    }

    return (
        <ContainerLogin>
            <BackgroundFirst>
                <ImageBack
                    source={require('../../../assets/register.png')}
                />
            </BackgroundFirst>
            <BackgroundImage>
                <WelcomeText>
                    Register !!!
                </WelcomeText>
                <WelcomeTextDescription>
                    welcome back we missed you
                </WelcomeTextDescription>
                <InputContainer>
                    <InputLabel>
                        Email
                    </InputLabel>
                    <InputContent
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        placeholder='Email'
                    />
                </InputContainer>
                <InputContainer>
                    <InputLabel>
                        Password
                    </InputLabel>
                    <InputContent
                        onChangeText={(text) => setSenha(text)}
                        value={senha}
                        placeholder='********'
                    />
                </InputContainer>
                <ButtonAcessar
                    onPress={register_function}
                >
                    <TextButton>
                        Register
                    </TextButton>
                </ButtonAcessar>



            </BackgroundImage>
        </ContainerLogin>
    )
}