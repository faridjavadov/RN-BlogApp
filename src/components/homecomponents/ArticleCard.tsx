import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux/store/store'
import { deleteArticle } from '../../redux/slices/ArticlesSlice'

const ArticleCard = (props: any) => {


    const dispatch = useDispatch<AppDispatch>();

    const DeleteArticle = (item:any) =>{
        dispatch(deleteArticle(item))
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headertext}>{props.item.title}</Text>
                <TouchableOpacity onPress={()=>DeleteArticle(props.item)}>
                    <Text style={{backgroundColor:'black',padding:10,color:'white',borderRadius:10}}>Delete</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.description}>
                <View style={{flexDirection:'row',gap:10}}>
                    <Image style={{width:40,height:40 , borderRadius:10}} source={{uri:props.item.photo}}/>
                    <Text style={{ color: 'black', fontWeight: '300', fontSize: 16,alignSelf:'center' }}>{props.item.author}</Text>
                </View>
                <View>
                    <Text style={{ fontStyle: 'italic' }}>Jul 29,2022</Text>
                </View>
                <View>
                    <Text style={{ fontStyle: 'italic',alignSelf:'flex-end' }}>4 min. read</Text>
                </View>

            </View>
            <View style={styles.article}>
                <Text style={styles.articletext}>{props.item.content.slice(0,200)}</Text>
            </View>
            <View>
                <TouchableOpacity onPress={props.GoToDetails}>
                    <Text style={styles.button}>Read More</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ArticleCard

const styles = StyleSheet.create({
    container: {
        marginTop: '9%',
        borderRadius: 9,
        backgroundColor: 'white',
        padding: 5
    },
    header: {
        flexDirection:'row',
        justifyContent:'space-between'
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
        fontSize: 15,
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