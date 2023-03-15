import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoList from './components/TodoList.js'
import Home from './screens/Home.js';
import AddTask from './screens/AddTask.js';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="AddTask" component={AddTask} options={{presentation: 'modal'}}/>
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}


export default App