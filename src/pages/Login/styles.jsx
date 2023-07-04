import { styled } from "styled-components";


export const ContainerLogin = styled.View`
    margin-top: 30px;
    flex: 1;
    background-color: #000;
`

export const BackgroundFirst = styled.View`
    flex: 1;
`

export const ImageBack = styled.Image`
    width: 100%;
    height: 432px;
`
export const ImageBack2 = styled.Image`
    width: auto;
    height: 100%;
`

export const BackgroundImage = styled.View`
    flex: 1.7;
    width: 100%;
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;
    background: rgba( 107, 46, 145, 0.35 );
    backdrop-filter: blur( 2px );
`

export const WelcomeText = styled.Text`
    margin-top: 20px;
    color: #fff;
    text-align: center;
    font-size: 35px;
`

export const WelcomeTextDescription = styled.Text`
    margin-top: -10px;
    color: #A4A4A4;
    text-align: center;
    font-size: 15px;
`

export const InputContainer = styled.View`

`

export const InputLabel = styled.Text`
    color: #A4A4A4;
    margin-left: 20px;
    text-align: left;
    font-size: 15px;
    margin-top: 10px;
`

export const InputContent = styled.TextInput.attrs({
    placeholderTextColor: '#A4A4A4'
})`
    margin-left: 20px;
    border: .3px solid #fff;
    border-radius: 5px;
    padding: 10px;
    width: 90%;
    margin-bottom: 20px;
    margin-top: 5px;
`

export const ButtonAcessar = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TextButton = styled.Text`
    text-align: center;
    color: #fff;
    background-color: #1F1B83;
    padding: 10px 130px;
    border-radius: 5px;
`

export const ButtonCadastrar = styled.Pressable`
display: flex;
    justify-content: center;
    align-items: center;
`

export const TextButtonCadastrar = styled.Text`
    text-align: center;
    color: #fff;
    margin-top: 20px;
`
