import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { StateType } from '../../redux/store/store'

const CateCard = (props:any) => {
  const {theme} = useSelector((state:StateType)=>state.ArticlesSlice)
  return (
    <View style={styles.card}>
      <Text style={[styles.title,{color:props.color,borderBottomWidth:props.bottomnwidth,borderBottomColor:theme=='light'?'black':'white'}]}>Category</Text>
    </View>
  )
}

export default CateCard

const styles = StyleSheet.create({
    card:{        
    },
    title:{
        fontSize:17,
        fontWeight:'700',
        padding:10,
        paddingHorizontal:20
    }
})