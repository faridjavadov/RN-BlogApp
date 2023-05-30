import { StyleSheet, Text, View, Switch } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, StateType } from '../redux/store/store';
import { changeTheme } from '../redux/slices/ArticlesSlice';

const SettingsScreen = () => {

  const dispatch = useDispatch<AppDispatch>();
  const { theme } = useSelector((state: StateType) => state.ArticlesSlice)
  const [isEnabled, setIsEnabled] = useState(false);


  const toggleSwitch = () => {
    dispatch(changeTheme())
    setIsEnabled(previousState => !previousState);
  }

  return (
    <View style={{ backgroundColor: theme == 'light' ? 'white' : 'black',flex:1,padding:20 }}>
      <View style={{flexDirection:'row',gap:20}}>
        <Text style={[styles.text, { color: theme == 'light' ? 'black' : 'white' }]}>Theme Mode:</Text>
        <Text style={[styles.text,{ color: theme == 'light' ? 'black' : 'white' }]}>Light</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}

        />
        <Text style={[styles.text,{ color: theme == 'light' ? 'black' : 'white' }]}>Dark</Text>
      </View>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: {
    
    flexDirection: 'row',
    
  },
  text: {
    fontSize: 20,
    color: 'black',
    alignSelf: 'center'

  }
})