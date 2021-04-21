import React, { useState, useCallback, useRef } from "react";
import { TextInputProps, StyleProp, ViewStyle } from "react-native";

import { Container, Input } from "./styles";

interface InputProps extends TextInputProps {
    name: string;
    value?: string;
    containerStyle?: StyleProp<ViewStyle>;
    type?: string;
    required?: boolean;
    minLength?: number;
    placeholder?: string;
    onTextChange?: (name: string, value: string) => void;
}

interface InputValueReference {
    value: string;
}

const InputContainer: React.FC<InputProps> = ({ name, defaultValue, value,  onTextChange,containerStyle, ...rest }) => {
    const inputElementRef = useRef<any>(null);
    const inputValueRef = useRef<InputValueReference>({ value: value ? value : defaultValue ? defaultValue : '' });
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
        setIsFilled(!!inputValueRef.current.value);
    }, []);

    const handleTextChange = (text: string) => {
        inputValueRef.current.value = text;
        onTextChange && onTextChange(name, text);
    };

    return (
        <Container
            style={containerStyle}
            isFocused={isFocused}
        >
            <Input
                ref={inputElementRef}
                keyboardAppearance="dark"
                placeholderTextColor="#666360"
                value={inputValueRef.current.value}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onChangeText={handleTextChange}
                {...rest}
            />
        </Container>
    );
};

export default InputContainer;
