import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, deleteArticle, getDataById } from '../redux/slices/ArticlesSlice';
import { AppDispatch, StateType } from '../redux/store/store';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const ArticleDetails = ({ navigation, props, route }: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const id = route.params
  const [deleted, setdeleted] = useState(false)
  const { data, blog, status, theme,favorite } = useSelector((state: StateType) => state.ArticlesSlice)

  useEffect(() => {
    dispatch(getDataById(id))
  }, [blog])

  const AddFavorite = () =>{
      dispatch(addFavorite(blog))
  } 


  const EditArticle = (item: any) => {
    navigation.navigate('EditScreen', item.id);
  }

  const DeleteArticle = (item: any) => {
    setdeleted(true);
    dispatch(deleteArticle(item))
  }

  return (
    deleted ? <View style={{ flex:1,justifyContent: 'center', alignItems: 'center',backgroundColor:theme == 'light'?'white':'black' }}><Text style={{ fontSize: 40, color: theme == 'light'? 'black':'white', fontWeight: '600' }}>Article is Deleted</Text></View> :
      <View style={[styles.container, { backgroundColor: theme == 'light' ? '#EFEFEF' : 'black' }]}>
        <View style={styles.header}>
          <Text style={styles.headertext}>{blog.title}</Text>
          <TouchableOpacity onPress={() => DeleteArticle(blog)}>
            <Text style={{ backgroundColor: theme == 'light'?'black':'white',color: theme == 'light'?'white':'black', padding: 10, borderRadius: 10 }}>Delete</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.description}>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <Image style={{ width: 40, height: 40, borderRadius: 10 }} source={{ uri: blog.photo ? blog.photo : 'https://rlv.zcache.com/broken_internet_image_icon_photo_print-r69551bbb568344f6868770d9048c8cf2_a0ib_8byvr_307.jpg' }} />
            <Text style={{ color: theme == 'light'?'black':'white', fontWeight: '300', fontSize: 16, alignSelf: 'center' }}>{blog.author}</Text>
          </View>
          <View>
            <Text style={{ color: theme == 'light'?'black':'white', fontStyle: 'italic' }}>Jul 29,2022</Text>
          </View>
          <View>
            <Text style={{ color: theme == 'light'?'black':'white',  fontStyle: 'italic', alignSelf: 'flex-end' }}>4 min. read</Text>
          </View>

        </View>
        <View style={styles.article}>
          <Text style={[styles.articletext,{ color: theme == 'light'?'black':'white'}]}>{blog.content}</Text>
        </View>
        <View style={{flexDirection:'row',alignSelf:'flex-end'}}>
          <TouchableOpacity onPress={AddFavorite}>
            <MaterialIcons  style ={{ alignSelf:'flex-end'}}size={30} name='favorite' color={favorite.find((c:any)=>c.id == blog.id)?'red':(theme == 'light'?'black':'white')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => EditArticle(blog)}>

            <AntDesign style={{ alignSelf: 'flex-end', marginTop: '4%' }} name='edit' size={30} color={theme=='light'?'black':'white'} />
          </TouchableOpacity>
        </View>
      </View>
  )
}

export default ArticleDetails

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: '9%',
    padding: 5
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headertext: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    lineHeight: 22

  },
  description: {
    marginVertical: '2%',
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingBottom: 12,
    alignItems: 'center',
    gap: 20
  },
  article: {
    marginTop: '2%',
    justifyContent: 'center'
  },
  articletext: {
    textAlign: 'justify',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '300',
    color: 'black',
    letterSpacing: -0.4,
  },
  button: {
    color: 'white',
    backgroundColor: '#181717',
    alignSelf: 'center',
    padding: 15,
    fontWeight: '500',
    paddingHorizontal: '39%',
    marginTop: '5%',
    borderRadius: 6,

  },
})