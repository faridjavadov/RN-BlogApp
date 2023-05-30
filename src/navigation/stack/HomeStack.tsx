import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../../screens/HomeScreen';
import ArticleDetails from '../../screens/ArticleDetails';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
   <Stack.Navigator screenOptions={{
    headerShown:false
   }}>
    <Stack.Screen name='HomeScreen' component={HomeScreen}/>
    <Stack.Screen name='ArticleDetails' component={ArticleDetails}/>
   </Stack.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})