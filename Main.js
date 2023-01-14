import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Quiz from './screens/Quiz';
import Result from './screens/Result';
const Stack = createNativeStackNavigator();

 
 
export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}> 
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
