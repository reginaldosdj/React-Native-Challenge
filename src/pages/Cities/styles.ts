import styled from "styled-components/native";


export const Container = styled.View`
    flex:1;
`;
export const Content = styled.View`
    flex-direction:row;
    align-items:center;
    justify-content:center;
    height:70px;
    width:100%;
    background:#fff;
    border-bottom-color:#bbb;
    border-bottom-width:1px;
    justify-content:space-between;  
`;
export const Plus = styled.TouchableOpacity`
    background-color:#79BEEE;
    border-radius:50px;
    width:60px;
    height:60px;
    align-items:center;
    justify-content:center;
    position:absolute;
    right:20px;
    bottom:20px;
    flex-direction:row;

`