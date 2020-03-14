import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../components/home/index';
import DetailsScreen from '../components/next.js';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Details" component={DetailsScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
