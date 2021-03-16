import * as actionTypes from '../types/postTypes'
let initialState ={
    postToggle:false,
    postEditToggle:false,
    posts:[]
}
const postReducer = (state=initialState,action) =>{
     switch(action.type){
         case actionTypes.POST_CLOSE:
             return{
                 ...state,postToggle:false 
             }
         case actionTypes.POST_OPEN:
             return{
                ...state,postToggle:true
            }
         case actionTypes.POST_SAVE:
             return{
                 ...state,
                 posts:[...state.posts,action.payload] 
             }
         case actionTypes.POST_DELETE:
             return{
                 ...state,
                 posts:state.posts.filter(post=>post.date !== action.payload) 
             }
         case actionTypes.POST_EDIT_OPEN:
             return{
                 ...state,postEditToggle:true
             }
         case actionTypes.POST_EDIT_CLOSE:
         return{
                ...state,postEditToggle:false
             }
         case actionTypes.POST_EDIT:
             const {title,body,categories,date} = action.payload
             for(let i in state.posts){
                 if(parseInt(state.posts[i].date)=== parseInt(date)){
                     state.posts[i] = {title,body,categories,date}
                     break
                 }
             }
             return {
                 ...state,
                 posts: state.posts 
             }
         default:
             return state
     }
}
export default postReducer