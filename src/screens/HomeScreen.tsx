import { StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import CateCard from '../components/homecomponents/CateCard'
import ArticleCard from '../components/homecomponents/ArticleCard'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, StateType } from '../redux/store/store'
import {  SearchbyId, getData } from '../redux/slices/ArticlesSlice'


const HomeScreen = ({ navigation }: any) => {

  



  const dispatch = useDispatch<AppDispatch>();
  
  //Slice Datas
  const {favorite, data, error, status,copydata, theme } = useSelector((state: StateType) => state.ArticlesSlice)


  useEffect(() => {
    dispatch(getData());
  }, [data])

//useStates
const [pressed, setpressed] = useState(0)
const [localData, setlocalData] = useState([])

  //Functions
  const handlepress = (id: any) => {
    setpressed(id);
    
    
  }
  const GoToDetails = (item: any) => {
    navigation.navigate('ArticleDetails', item.id)
  }
const handleSearch = (value:any) =>{
  dispatch(SearchbyId(value))

}
// console.log(favorite);

  // const renderItemCategory = ({ item }: any) => {
  //   return (
  //     <View style={{ marginHorizontal: 10 }}>
  //       <TouchableOpacity onPress={() => handlepress(item.id)}>
  //         <CateCard color={item.id == pressed  ?(theme == 'dark'?'white':'black') : 'lightgray'} bottomnwidth={item.id == pressed ? 1 : 0} />
  //       </TouchableOpacity>
  //     </View>
  //   )
  // }

  const renderItemArticle = ({ item }: any) => {
    return (
      <View>
        <ArticleCard item={item} GoToDetails={() => GoToDetails(item)} />
      </View>
    )
  }
  return (
    <View style={{backgroundColor: theme == 'light' ? '#EFEFEF' : 'black'}}>
      <View style={[styles.container]}>
        <View style={styles.header}>
          <View style={styles.inputcontainer}>
            <TextInput style={styles.input} onChangeText={handleSearch} placeholder='Search'  />
          </View>
          {/* <View style={styles.categorylist}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={data}
              renderItem={renderItemCategory}
            />

          </View> */}
        </View>
        <View style={styles.articlelist}>
          <FlatList

            data={data}
            renderItem={renderItemArticle}
          />
          

        </View>

      </View>
    </View>
  )
}



export default HomeScreen

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
  },
  header: {},
  inputcontainer: {

  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 20
  },
  categorylist: {
    marginTop: '7%'
  },
  articlelist: {
    marginTop: '10%',
    height: '88%'
  }

})