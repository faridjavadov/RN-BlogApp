import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, StateType } from '../redux/store/store'
import { editArticle, getDataById } from '../redux/slices/ArticlesSlice'

const EditScreen = (route:any) => {
    const [author, setauthor] = useState('')
    const [title, settitle] = useState('')
    const [content, setcontent] = useState('')
    const {  blog, status,theme } = useSelector((state: StateType) => state.ArticlesSlice)
    
    
    const id = route.params
    const dispatch = useDispatch<AppDispatch>();
    
    
    useEffect(() => {
      dispatch(getDataById(id))
      setauthor(blog.author)
      settitle(blog.title)
      setcontent(blog.content)
    }, [blog])
    

const EditArticle = () =>{
    let obj = { 
        author:author,
        title:title,
        content:content,
        photo:blog.photo,
        id: blog.id
      }
    dispatch(editArticle(obj))
}
    return (
        <View style={[styles.container, {backgroundColor: theme == 'light' ? 'white' : 'black'}]}>
            <View style={styles.textContainer}>
                <Text style={[styles.text, { color: theme == 'light' ? 'black' : 'white' }]}>Author</Text>
                <TextInput onChangeText={setauthor} value={author} placeholder='author' style={styles.textInput} />
                <Text style={[styles.text, { color: theme == 'light' ? 'black' : 'white' }]}>Title</Text>
                <TextInput onChangeText={settitle} value={title} placeholder='title' style={styles.textInput} />
            </View>
            <View>
                <Text style={[styles.text, { color: theme == 'light' ? 'black' : 'white' }]}>Content of Article</Text>
                <TextInput onChangeText={setcontent} defaultValue={content} multiline style={[styles.textInput, { height: '50%' }]} />
                <TouchableOpacity onPress={EditArticle}>
                    <Text style={[styles.button,{backgroundColor:theme=='light'?'black':'white',color: theme == 'light' ? 'white' : 'black'}]}>Edit</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default EditScreen

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