import styled from "styled-components/native";


export const Container = styled.View`
    align-items:center;
    justify-content:center;
    flex:1;
`;
export const Content = styled.View`
    align-items:center;
    justify-content:center;
    background-color:#fff;
    justify-content:space-between;  
    margin:10px 0;
    border:1px solid #9dd8fb;
    border-radius:5px;
`;

export const Title = styled.Text`
    text-align:center;
    font-size:30px;
    padding:10px;
    color:black;
    border-bottom-color:grey;
    border-bottom-width:1px;
`;
export const dataLocale = styled.View`
    flex-direction:row;
    align-items:center;
    justify-content:space-around;
    text-align:center;
    font-size:25px;
    padding:10px;
`;
export const textLocale = styled.Text`
    font-size: 16px;
    text-align: left;
    padding: 5px;
    max-width:500px;
    color:#646161;
`;
export const actionButton = styled.View`
   flex-direction:column;
   height:100px;
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
