import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


interface ArticleState {
    data: any,
    copydata:any,
    status: 'pending' | 'fulfilled' | 'rejected' | null,
    error: any,
    blog:any
    theme:'dark'| 'light',
    favorite:any
}

const InitialState :ArticleState = {
    data: [],
    copydata:[],
    status: null,
    error: null,
    blog:{},
    theme:'light',
    favorite:[]
}

export const getData = createAsyncThunk('get/articles',async()=>{
    const response = await axios.get('https://64739a22d784bccb4a3cc2f7.mockapi.io/articles');
    return response.data
})

export const getDataById = createAsyncThunk('get/article',async(id:any)=>{
    
    const response = await axios.get(`https://64739a22d784bccb4a3cc2f7.mockapi.io/articles/${id}`);        
    return response.data
})
export const postArticle = createAsyncThunk('post/Articles',async(item:any)=>{
    await axios.post('https://64739a22d784bccb4a3cc2f7.mockapi.io/articles',item);
    return item
})

export const deleteArticle = createAsyncThunk('delete/Articles', async(item:any)=>{
    await axios.delete(`https://64739a22d784bccb4a3cc2f7.mockapi.io/articles/${item.id}`);
    return item
})

export const editArticle = createAsyncThunk('edit/Article',async(item:any)=>{   
    await axios.put(`https://64739a22d784bccb4a3cc2f7.mockapi.io/articles/${item.id}`,item);
    return item

})

const ArticleSlice = createSlice({
    name: 'Articles',
    initialState: InitialState,
    reducers: {
        changeTheme:(state)=>{
            state.theme = state.theme == 'light'?'dark':'light'
            console.log(state.theme);
            
        },
        addFavorite:(state,action)=>{
            if(state.favorite.find((c:any)=>c.id == action.payload.id)){
               state.favorite = state.favorite.filter((c:any)=>c.id != action.payload.id)    
            }
            else{
                state.favorite.push(action.payload)
            }
        },
        SearchbyId:(state,action)=>{
            state.data = state.copydata.filter((c:any)=>c.title.toLowerCase().includes(action.payload.toLowerCase()))

        }
     
    },
    extraReducers: builder => {

        builder.addCase(getData.pending,(state)=>{
            state.status = 'pending'
        }).addCase(getData.fulfilled,(state,action)=>{
            state.status = 'fulfilled'        
            state.data = action.payload
            state.copydata = action.payload
        }).addCase(getData.rejected,(state)=>{
            state.status = 'rejected'
        })

        builder.addCase(getDataById.pending,(state)=>{
            state.status = 'pending'
        }).addCase(getDataById.fulfilled,(state,action)=>{
            state.status = 'fulfilled'   
                      
            state.blog = action.payload       
        }).addCase(getDataById.rejected,(state)=>{
            state.status = 'rejected'
        })

        builder.addCase(postArticle.pending,(state)=>{
            state.status = 'pending'
        }).addCase(postArticle.fulfilled,(state,action)=>{
            state.status = 'fulfilled'
            state.data.push(action.payload)
        }).addCase(postArticle.rejected,(state)=>{
            state.status = 'rejected'
        })

        builder.addCase(deleteArticle.pending,(state)=>{
            state.status = 'pending'
        }).addCase(deleteArticle.fulfilled, (state:any,action)=>{
            state.status = 'fulfilled'
            state.data = state.data.filter((c:any)=>c.id != action.payload.id)
            
        }).addCase(deleteArticle.rejected,(state,action)=>{
            state.status = 'rejected'
            state.error = action.payload
        })

        builder.addCase(editArticle.pending,(state)=>{
            state.status = 'pending'
        }).addCase(editArticle.fulfilled, (state:any,action)=>{
            state.status = 'fulfilled'
            state.blog = action.payload
            state.data = state.data.filter((c:any)=>c.id != action.payload.id)
            state.data.push(action.payload)
            
        }).addCase(editArticle.rejected,(state,action)=>{
            state.status = 'rejected'
            state.error = action.payload
        })

    }
    
})


export default ArticleSlice.reducer

export const {changeTheme,addFavorite,SearchbyId} = ArticleSlice.actions