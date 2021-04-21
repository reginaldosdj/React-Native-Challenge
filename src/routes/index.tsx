import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cities from "../pages/Cities";
import newCities from "../pages/NewCity";
import localeList from "../pages/LocaleList";
import newLocale from "../pages/NewLocale";

const Stack = createStackNavigator();

const Routes: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Cities" screenOptions={{ headerShown: true, headerTitleAlign: 'center', headerTitleStyle: { color: "#fff", fontSize: 25 }, headerStyle: { backgroundColor: '#79BEEE' } }}>
                <Stack.Screen name="Cities" component={Cities} options={{ title: 'Cidades' }} />
                <Stack.Screen name="NewCity" component={newCities} options={{ title: 'Criar Cidades' }} />
                <Stack.Screen name="LocaleList" component={localeList} options={{ title: 'Locais' }} />
                <Stack.Screen name="NewLocale" component={newLocale} options={{ title: 'Criar localidades' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Routes;
