import { useNavigation } from "@react-navigation/native"

import firebase from "firebase";

import { ContainerLogin, ImageBack, BackgroundImage, WelcomeText, BackgroundFirst, WelcomeTextDescription, InputContainer, InputLabel, InputContent, ButtonAcessar, TextButton, ButtonCadastrar, TextButtonCadastrar } from "./styles"


import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";


export const Login = () => {
    const navigation = useNavigation();

    const { user, setUser } = useContext(AuthContext)

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function login() {
        await firebase.auth().signInWithEmailAndPassword(email, senha).then(
            (value) => {
                setUser(value.user.uid)
                navigation.navigate('Home')
            }
        ).catch(() => { alert('Ops ... algo deu errado!!!') })

        setEmail('');
        setSenha('');
    }

    return (
        <ContainerLogin>
            <BackgroundFirst>
                <ImageBack
                    source={require('../../../assets/teste.png')}
                />
            </BackgroundFirst>
            <BackgroundImage>
                <WelcomeText>
                    Welcome Back!
                </WelcomeText>
                <WelcomeTextDescription>
                    welcome back we missed you
                </WelcomeTextDescription>
                <InputContainer>
                    <InputLabel>
                        Username
                    </InputLabel>
                    <InputContent
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        placeholder='Username'
                    />
                </InputContainer>
                <InputContainer>
                    <InputLabel >
                        Password
                    </InputLabel>
                    <InputContent
                        onChangeText={(text) => setSenha(text)}
                        value={senha}
                        placeholder='********'
                    />
                </InputContainer>
                <ButtonAcessar
                    onPress={login}
                >
                    <TextButton>
                        Sign in
                    </TextButton>
                </ButtonAcessar>
                <ButtonCadastrar
                    onPress={() => { navigation.navigate('Register') }}
                >
                    <TextButtonCadastrar>
                        Register
                    </TextButtonCadastrar>
                </ButtonCadastrar>



            </BackgroundImage>
        </ContainerLogin>
    )
}