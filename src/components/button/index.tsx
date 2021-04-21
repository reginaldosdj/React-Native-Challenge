import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, ButtonContainer, ButtonText } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
    color?: string;
    text?: string;
    textSize?: number;
}

const Button: React.FC<ButtonProps> = ({
    color,
    text,
    textSize,
    ...rest
}) => {

    return (
        <Container {...rest}>
            <ButtonContainer>
                <ButtonText style={{ fontSize: textSize ? textSize : 16 }}>
                    {text}
                </ButtonText>
            </ButtonContainer>
        </Container>
    )
};

export default Button;
