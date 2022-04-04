import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// You can import from local files
import Home from './screens/Home';
import NewTODO from './screens/NewTODO';
import Picture from './screens/Picture';
import SecondPage from './screens/SecondPage';

import './globals.js'; //importo le variabili globali che sono definite nel file globals.js

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Home"
        screenOptions={() => ({
          headerTitleStyle: { fontWeight: 'bold' },
          headerTitleAlign: 'center',
          headerBackground: () => (
            <Image
              source={{
                uri: 'https://i.pinimg.com/originals/f0/40/f0/f040f07ac0ad09cc155ecc4bbface15a.jpg',
              }}
              style={{ width: '100%', height: 80 }}
            />
          ),
          headerTintColor: 'white',
        })}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity style={{ width: 50 }}>
                <Button
                  onPress={() => navigation.navigate('NewTODO')}
                  title="+"
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="NewTODO" component={NewTODO} />
        <Stack.Screen name="Picture" component={Picture} />
        <Stack.Screen
          name="SecondPage"
          component={SecondPage}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
