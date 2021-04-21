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
        <Input name="" placeholder="Nome do local" />
        <Input name="" placeholder="tipo de estabelecimento" />
        <Input name="" placeholder="endereço" />
        <Input
          multiline={true}
          style={{
            padding: 10,
            height: 116,
          }}
          placeholder={"notas sobre o local"}
          containerStyle={{
            padding: undefined,
            paddingLeft: undefined,
            paddingRight: undefined,
            paddingBottom: undefined,
            width: deviceWidth - 10,
            maxWidth: 500,
            height: 116,
            margin: undefined,
            marginLeft: undefined,
          }}
          name="text"
        />
        <Button text="Criar local" textSize={20} />
      </View>
    </Styles.Container>
    </KeyboardAvoidingView>
  )
}

export default NewCity;