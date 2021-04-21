import React from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView
} from "react-native";
import * as Styles from './styles';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { useNavigation} from "@react-navigation/native";

interface CityRouteParams {
  id: number;
}
const LocalList: React.FC = () => {
  const navigation = useNavigation();
  const deviceWidth = useWindowDimensions().width;
  const local = [{
    id: 1,
    name: 'regis',
    tipo: 'restaurante',
    endereco: 'rua qualquer asdasdsadasdasdsadasdasdsa',
    notas: 'qualquer coisa'

  }, {
    id: 2,
    name: 'regis',
    tipo: 'restaurante',
    endereco: 'rua qualquer asdasdsadasdasdsadasdasdsa',
    notas: 'qualquer coisa'

  }, {
    id: 3,
    name: 'regis',
    tipo: 'restaurante',
    endereco: 'rua qualquer asdasdsadasdasdsadasdasdsa',
    notas: 'qualquer coisa'

  },{
    id: 5,
    name: 'regis',
    tipo: 'restaurante',
    endereco: 'rua qualquer asdasdsadasdasdsadasdasdsa',
    notas: 'qualquer coisa'

  },]
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flex: 1 }}
    >
      <Styles.Container>
        <FlatList
          keyExtractor={local => local.id.toString()}
          extraData={local}
          data={local}
          showsVerticalScrollIndicator={false}
          style={{ flex: local.length > 0 ? 1 : 0.5 }}
          ListEmptyComponent={
            <Text>Nenhum local encontrado na cidade!</Text>
          }
          renderItem={({ item: local }) => (
            <Styles.Content style={{ width: deviceWidth - 10, maxWidth: 500 }}>
              <Styles.Title style={{ width: deviceWidth - 40, maxWidth: 460 }}>{local.name}</Styles.Title>
              <Styles.dataLocale style={{ width: deviceWidth - 10, maxWidth: 500 }}>
                <View>
                  <Styles.textLocale style={{ width: deviceWidth - 60 , maxWidth: 400 }}>Tipo: {local.tipo}</Styles.textLocale>
                  <Styles.textLocale style={{ width: deviceWidth - 60 , maxWidth: 400 }}>Endereço: {local.endereco}</Styles.textLocale>
                  <Styles.textLocale style={{ width: deviceWidth - 60 , maxWidth: 400 }}>Notas: {local.notas ? local.notas : "não possui"}</Styles.textLocale>
                </View>
                <Styles.actionButton>
                  <TouchableOpacity onPress={() => { navigation.navigate("NewLocale") }}>
                    <MaterialIcons name="edit" size={40} color="#ed7e00" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => { }}>
                    <FontAwesome name="trash" size={40} color="#f00" />
                  </TouchableOpacity>
                </Styles.actionButton>
              </Styles.dataLocale>
            </Styles.Content>
          )}
        />
        <Styles.Plus onPress={() => {navigation.navigate("NewLocale")}}>
          <FontAwesome name="plus" size={30} color="#fff" />
        </Styles.Plus>
      </Styles.Container>
    </ScrollView>
  )
}

export default LocalList;