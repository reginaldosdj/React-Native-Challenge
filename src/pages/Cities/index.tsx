import React,{useContext} from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import * as Styles from './styles';

import { MaterialIcons,FontAwesome} from '@expo/vector-icons';
import {  useNavigation } from "@react-navigation/native";
const Cities: React.FC = () => {
const navigation = useNavigation();

 const cities =  [
  {
    id: 1,
    name: "Rio de Janeiro",
    country: "Brasil",
  }
]
  return (
    <Styles.Container>
      <FlatList
        keyExtractor={city => city.id.toString()}
        extraData={cities}
        data={cities}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text>Nenhuma cidade encontrada!</Text>
        }
        renderItem={({ item: city }) => (
          <TouchableOpacity onPress={()=>{navigation.navigate("LocaleList")}}>
          <Styles.Content>
            
            <Text style={{ fontSize: 20, marginLeft: 10,color:'#646161'}}>{city.name}</Text>
              <MaterialIcons name="keyboard-arrow-right" size={24} color='#646161'/>
          </Styles.Content>
          </TouchableOpacity>
        )}
      />
        <Styles.Plus onPress={() => {navigation.navigate("NewCity")}}>
          <FontAwesome name="plus" size={30} color="#fff" />
        </Styles.Plus>
    </Styles.Container>
  )
}

export default Cities;