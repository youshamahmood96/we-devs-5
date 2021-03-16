import * as actionTypes from '../types/categoryTypes'
export const categoryModalOpen = () =>{
    return{
        type:actionTypes.CATEGORY_OPEN
    }
}
export const categoryModalClose = () =>{
    return{
        type:actionTypes.CATEGORY_CLOSE
    }
}
export const categorySave = (content) =>{
    return{
        type:actionTypes.CATEGORY_SAVE,
        payload:content
    }
}
export const categoryDelete = (content) =>{
    return{
        type:actionTypes.CATEGORY_DELETE,
        payload:content
    }
}
export const categoryEdit = (content) =>{
    return{
        type:actionTypes.CATEGORY_EDIT,
        payload:content
    }
}