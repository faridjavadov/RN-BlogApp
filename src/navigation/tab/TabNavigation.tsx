import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from '../stack/HomeStack';
import SettingsScreen from '../../screens/SettingsScreen';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AddScreen from '../../screens/AddScreen';
import EditScreen from '../../screens/EditScreen';
import { useSelector } from 'react-redux';
import { StateType } from '../../redux/store/store';


const Tab = createBottomTabNavigator();

const TabNavigation = () => {

  const {theme} = useSelector((state:StateType)=>state.ArticlesSlice)

  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: theme == 'light'?'white':'black',
        borderTopWidth:0
      }
      
    }}>
      <Tab.Screen name='HomeStack' component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View >
                <AntDesign name='home' size={30} color={focused ? (theme == 'light'?'black':'white') : 'lightgray'} />
              </View>
            )
          }

        }} />
      <Tab.Screen name='AddScreen' component={AddScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View >
                <Ionicons name='add-outline' size={35} color={focused ? (theme == 'light'?'black':'white') : 'lightgray'} />
              </View>
            )
          }
        }} />
      <Tab.Screen name='EditScreen' component={EditScreen} options={{
        tabBarIcon: ({ focused }) => {
          return (
            <View >
              <AntDesign name='edit' size={30} color={focused ? (theme == 'light'?'black':'white') : 'lightgray'} />
            </View>
          )
        }
      }} />
      <Tab.Screen name='SettingsScreen' component={SettingsScreen} options={{
        tabBarIcon: ({ focused }) => {
          return (
            <View  >
              <Ionicons name='settings-outline' size={30} color={focused ? (theme == 'light'?'black':'white') : 'lightgray'} />
            </View>
          )
        }
      }} />
    </Tab.Navigator>
  )
}

export default TabNavigation

const styles = StyleSheet.create({

})
//9d4edd