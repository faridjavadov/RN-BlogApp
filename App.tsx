import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigation from './src/navigation/tab/TabNavigation'
import { Provider } from 'react-redux'
import { store } from './src/redux/store/store'

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})