import * as actionTypes from '../types/postTypes'
export const postModalClose = () =>{
    return{
        type:actionTypes.POST_CLOSE
    }
}
export const postModalOpen = () =>{
    return{
        type:actionTypes.POST_OPEN
    }
}
export const postSave = (content) =>{
    return{
        type:actionTypes.POST_SAVE,
        payload:content
    }
}
export const postDelete = (content) =>{
    return{
        type:actionTypes.POST_DELETE,
        payload:content
    }
}
export const postEditModalOpen = () =>{
    return{
        type:actionTypes.POST_EDIT_OPEN
    }
}
export const postEditModalClose = () =>{
    return{
        type:actionTypes.POST_EDIT_CLOSE
    }
}
export const postEdit = (content) =>{
    return{
        type:actionTypes.POST_EDIT,
        payload:content
    }
}