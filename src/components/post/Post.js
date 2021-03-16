import React, { useState } from "react";
import {Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postModalClose, postSave } from "../../redux/action/postActions";
import { useForm } from "react-hook-form";
import { categoryModalOpen } from "../../redux/action/categoryActions";
import { useHistory } from "react-router";
import Category from "../category/Category";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

const Post = () => {
    const show = useSelector(state => state ?state.postReducer.postToggle: false)
    // const [category,setCategory] = useState(null)
    const [selectedCategories,setSelectedCategories] = useState([])
    const history = useHistory()
    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch(postModalClose())
        history.push('/')
    }
    const categories =useSelector(state => state?state.categoryReducer.categories:'')
    const handleSelected = (selected) => {
        if(selected.find(category=>category==='Create New Category...')){
            dispatch(categoryModalOpen())
        }
        setSelectedCategories(selected)
    }
    const { register, handleSubmit,errors } = useForm();
    const onSubmit = data => {
        const savedData = {...data,date:Date.now(),categories:selectedCategories}
        dispatch(postSave(savedData))
        history.push('/')
    }

    return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a new post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className="form-group">
                            <label htmlFor="title">Post Title</label>
                            <input name="title" type="text" className="form-control" id="post-title" placeholder="Enter Post Title"  ref={register({ required: true })} />
                            {errors.title && <span>This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="body">Post Body</label>
                            <textarea name="body" className="form-control" id="post-body" rows="3"  ref={register({ required: true })} />
                            {errors.body && <span>This field is required</span>}
                        </div>
                        <div className="form-group">
                        <label htmlFor="category">Pick a Category</label>
                        
                        <DropdownMultiselect handleOnChange={(selected) => {handleSelected(selected)}}
                        placeholder="Create New Category ..."
                        options={categories}
                        name="category"
                        />
                        
                        {errors.category && <span>This field is required</span>}
                      </div>
                        <button type="submit" className="btn btn-primary">Create Post</button>
                    </form>
                </Modal.Body>
                <Category/>
            </Modal>

    );
};

export default Post;