import * as actionTypes from '../types/categoryTypes'
let initialState ={
    categoryToggle:false,
    categories:['Create New Category...','Sports','International','Fashion']
}
const categoryReducer = (state=initialState,action) =>{
     switch(action.type){
         case actionTypes.CATEGORY_CLOSE:
             return {
                 ...state,categoryToggle:false
             }
         case actionTypes.CATEGORY_OPEN:
             return {
                ...state,categoryToggle:true
            }
         case actionTypes.CATEGORY_SAVE:
             return{
                 ...state,
                 categories:[...state.categories,action.payload]
             }
         case actionTypes.CATEGORY_DELETE:
             return{
                 ...state,
                 categories:state.categories.filter(category=>category!==action.payload) 
             }
         case actionTypes.CATEGORY_EDIT:
            for(let i in state.categories){
                if(state.categories[i] === action.payload.name){
                    state.categories[i] = action.payload.title
                    break
                }
            }
             return{
                 ...state,
                 categories:state.categories
             }
         default:
             return state
     }
}
export default categoryReducer