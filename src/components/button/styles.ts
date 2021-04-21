import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
    height: 60px;
    justify-content: center;
    align-items: center;
    margin:5px 0;
`;

export const ButtonContainer = styled.View`
    flex: 1;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
    border-radius:10px;
    background-color:#077187;
`;

export const ButtonText = styled.Text`
    color:white;
    font-size:16px;
`;

