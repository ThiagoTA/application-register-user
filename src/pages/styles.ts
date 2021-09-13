import styled from "styled-components/native";
import { Platform } from "react-native";


export const Container = styled.View`

    flex: 1;
    background-Color: #784ECB;
    padding-left: 30px;
    padding-top: 70px;
    padding-right: 30px;
    
`

export const Title = styled.Text`
    color: #FFF;
    font-size: 30px;
    padding-bottom: 10px;
    font-weight: bold;
    align-items: center;
`

export const Input = styled.TextInput`
    background-color: #000000;
    color: #FFF;
    font-size: 18px;
    padding: ${Platform.OS === 'ios' ? '15px' : '9px'};
    margin-top: 5px;
    border: 1px solid palevioletred;
    border-radius: 20px;
`

export const TitleCadastrar = styled.Text`
    color: #FFF;
    font-size: 20px;
    font-weight: bold;
    margin-top: 16px;
    padding-left: 8px;
`