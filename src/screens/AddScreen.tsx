import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, StateType } from '../redux/store/store'
import { postArticle } from '../redux/slices/ArticlesSlice'

const AddScreen = () => {


  //useStates

  const [author, setauthor] = useState('')
  const [title, settitle] = useState('')
  const [content, setcontent] = useState('')

 
  const {theme} = useSelector((state:StateType)=>state.ArticlesSlice)


  //dispatch

  const dispatch = useDispatch<AppDispatch>();



  const PostArticle = () =>{
    let obj = {
      author:author,
      title:title,
      content:content,
      photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Pictogram_nophoto.svg/1024px-Pictogram_nophoto.svg.png',
      id: Math.floor(Math.random()*20000)
    }
    
    dispatch(postArticle(obj));

  }


  return (
    <View style={[styles.container, {backgroundColor: theme == 'light' ? 'white' : 'black'}]}>
      <View style={styles.textContainer}>
        <Text style={[styles.text, { color: theme == 'light' ? 'black' : 'white' }]}>Author</Text>
        <TextInput onChangeText={setauthor} placeholder='author' style={styles.textInput} />
        <Text style={[styles.text, { color: theme == 'light' ? 'black' : 'white' }]}>Title</Text>
        <TextInput onChangeText={settitle} placeholder='title'  style={styles.textInput} />
      </View>
      <View>
        <Text style={[styles.text, { color: theme == 'light' ? 'black' : 'white' }]}>Content of Article</Text>
        <TextInput onChangeText={setcontent} multiline style={[styles.textInput, { height: '50%' }]} />
        <TouchableOpacity onPress={PostArticle}>
          <Text style={[styles.button,{backgroundColor:theme=='light'?'black':'white',color: theme == 'light' ? 'white' : 'black'}]}>Post</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default AddScreen

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 20
  },
  textContainer: {
    gap: 20
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    backgroundColor:'lightgray'

  },
  text: {
    fontSize: 26,
    fontWeight: '600',
    color: 'black'
  },
  button: {
    color: 'white',
    backgroundColor: '#181717',
    alignSelf: 'center',
    padding: 15,
    fontWeight: '500',
    paddingHorizontal: '45%',
    marginTop: '5%',
    borderRadius: 6,

},
})