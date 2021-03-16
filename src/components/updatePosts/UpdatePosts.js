import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { categoryModalOpen } from '../../redux/action/categoryActions';
import { postEdit, postEditModalClose } from '../../redux/action/postActions';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import Category from '../category/Category';
const UpdatePosts = () => {
    const history = useHistory()
    const [selectedCategories,setSelectedCategories] = useState([])
    const { id } = useParams()
    const posts = useSelector(state => state ? state.postReducer.posts : '')
    const thisPost = (posts.filter(post => parseInt(post.date) === parseInt(id)))[0]
    const { title, body, categories,date } = thisPost
    const show = useSelector(state => state ? state.postReducer.postEditToggle : '')
    const allCategories =useSelector(state => state?state.categoryReducer.categories:'')
    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch(postEditModalClose())
        history.push('/')
    }
    const { register, handleSubmit,errors } = useForm();
    const handleSelected = (selected) => {
        if(selected.find(category=>category==='Create New Category...')){
            dispatch(categoryModalOpen())
        }
        setSelectedCategories(selected)
    }
   
    const onSubmit = data => {
        const savedData = {...data,date,categories:selectedCategories}
        console.log(savedData);
        dispatch(postEdit(savedData))
        history.push('/')
    }
    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Update Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="form-group">
                    <label htmlFor="title">Post Title</label>
                    <input name="title" type="text" className="form-control" id="post-title" defaultValue={title} ref={register({ required: true })} />
                    {errors.title && <span>This field is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="body">Post Body</label>
                    <textarea name="body" className="form-control" id="post-body" rows="3" defaultValue={body} ref={register({ required: true })} />
                    {errors.body && <span>This field is required</span>}
                </div>
                <div className="form-group">
                <label htmlFor="cartegory">Pick a Category</label>
                <DropdownMultiselect handleOnChange={(selected) => {handleSelected(selected)}}
                        selected={categories}
                        placeholder="Create New Category ..."
                        options={allCategories}
                        name="category"
                        />
                {errors.category && <span>This field is required</span>}
              </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </Modal.Body>
        <Category/>
    </Modal>
    );
};

export default UpdatePosts;