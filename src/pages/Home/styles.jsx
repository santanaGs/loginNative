import { styled } from "styled-components";

export const Teste = styled.View`
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
`

export const InputTask = styled.TextInput.attrs({
    placeholderTextColor: '#A4A4A4'
})`
    border: 1px solid purple;
    padding: 10px;
    border-radius: 10px;
    width: 80%;
    color: #fff;
    margin-bottom: 20px;
`

export const CancelEdit = styled.View`
    display: flex;
    flex-direction: row;
    gap: 30px;
    margin-top: 55px;
    margin-left: 50px;
`