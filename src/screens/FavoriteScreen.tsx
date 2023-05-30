import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ArticleCard from '../components/homecomponents/ArticleCard'
import { useSelector } from 'react-redux'
import { StateType } from '../redux/store/store'

const FavoriteScreen = ({ navigation }: any) => {


    const { theme, favorite } = useSelector((state: StateType) => state.ArticlesSlice)


    const GoToDetails = (item: any) => {
        navigation.navigate('ArticleDetails', item.id)
    }
    const renderItemArticle = ({ item }: any) => {
        return (
            <View>
                <ArticleCard item={item} GoToDetails={() => GoToDetails(item)} />
            </View>
        )
    }
    return (
        <View style={{ backgroundColor: theme == 'light' ? '#EFEFEF' : 'black' }}>
            <View style={[styles.container]}>
                <View>
                    <Text style={{fontSize:30,color:theme =='light'?'black':'white',fontWeight:'600'}} >Favorites</Text>
                </View>
                <View style={styles.articlelist}>
                    <FlatList

                        data={favorite}
                        renderItem={renderItemArticle}
                    />

                </View>

            </View>
        </View>
    )
}

export default FavoriteScreen

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 40,
    },
    articlelist: {
        marginTop: '10%',
        height: '88%'
    },
})