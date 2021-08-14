import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler' 
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from "./Screens/HomeScreen"
import SpaceCraftScreen from "./Screens/SpaceCraftScreen"
import StarMapScreen from "./Screens/StarMapScreen"
import DailyPicScreen from "./Screens/DailyPicScreen"


const Stack=createStackNavigator()
function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      <Stack.Screen name="SpaceCraftScreen" component={SpaceCraftScreen}/>                                                      
      <Stack.Screen name="StarMapScreen" component={StarMapScreen}/>
      <Stack.Screen name="DailyPicScreen" component={DailyPicScreen}/>
      

      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default App ;
  