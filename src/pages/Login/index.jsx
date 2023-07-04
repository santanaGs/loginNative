import { Image } from "react-native"
import { TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { ContainerLogin, ImageBack, BackgroundImage, WelcomeText, BackgroundFirst, WelcomeTextDescription, InputContainer, InputLabel, InputContent, ButtonAcessar, TextButton, ButtonCadastrar, TextButtonCadastrar } from "./styles"

import { useFonts } from 'expo-font';

export const Login = () => {
    const navigation = useNavigation();

    const [fontsLoaded] = useFonts({
        'Poppins-SemiBold': require('../../../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Medium': require('../../../assets/fonts/Poppins-Medium.ttf')
    });

    return (
        <ContainerLogin>
            <BackgroundFirst>
                <ImageBack
                    source={require('../../../assets/teste.png')}
                />
            </BackgroundFirst>
            <BackgroundImage>
                <WelcomeText style={{ fontFamily: 'Poppins-SemiBold' }}>
                    Welcome Back!
                </WelcomeText>
                <WelcomeTextDescription style={{ fontFamily: 'Poppins-Medium' }}>
                    welcome back we missed you
                </WelcomeTextDescription>
                <InputContainer>
                    <InputLabel style={{ fontFamily: 'Poppins-Medium' }}>
                        Username
                    </InputLabel>
                    <InputContent
                        placeholder='Username'
                    />
                </InputContainer>
                <InputContainer>
                    <InputLabel style={{ fontFamily: 'Poppins-Medium' }}>
                        Password
                    </InputLabel>
                    <InputContent
                        placeholder='********'
                    />
                </InputContainer>
                <ButtonAcessar>
                    <TextButton style={{ fontFamily: 'Poppins-Medium' }}>
                        Sign in
                    </TextButton>
                </ButtonAcessar>
                <ButtonCadastrar
                    onPress={() => {navigation.navigate('Home')}}
                >
                    <TextButtonCadastrar 
                    style={{ fontFamily: 'Poppins-Medium' }}>
                        Register
                    </TextButtonCadastrar>
                </ButtonCadastrar>



            </BackgroundImage>
        </ContainerLogin>
    )
}