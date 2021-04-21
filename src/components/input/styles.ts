//import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

interface ContainerProps {
    isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
    height: 60px;
    padding: 0 16px;
    border-radius: 10px;
    border-width: 2px;
    margin:5px 0;
    border-color: #666360;
    flex-direction: row;
    align-items: center;
    ${(props: any) =>
        props.isFocused &&
        css`
            border-color: #077187;
        `}
`;

export const Input = styled.TextInput`
    flex: 1;
    z-index: 2;
    height: 60px;
    align-items: center;
    justify-content: center;
    color: black;
    font-size: 18px
`;

