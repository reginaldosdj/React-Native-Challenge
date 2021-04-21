import React from 'react';
import {
  View,
  useWindowDimensions,
  KeyboardAvoidingView
} from "react-native";
import Input from '../../components/input';
import Button from '../../components/button';
import * as Styles from './styles';

const NewCity: React.FC = () => {
  const deviceWidth = useWindowDimensions().width;
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} enabled>
      <Styles.Container>
        <View style={{ width: deviceWidth - 10, maxWidth: 500 }}>
          <Input name="" placeholder="Nome da Cidade" />
          <Input name="" placeholder="Nome do País" />
          <Button text="Criar cidade" textSize={24} />
        </View>
      </Styles.Container>
    </KeyboardAvoidingView>
  )
}

export default NewCity;