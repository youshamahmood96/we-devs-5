import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { categoryEdit } from '../../redux/action/categoryActions';

const UpdateCategories = () => {
    const {name} = useParams()
    const { register, handleSubmit,errors } = useForm();
    const dispatch = useDispatch()
    const history = useHistory()
    const onSubmit = data => {
        const savedData = {...data,name}
        dispatch(categoryEdit(savedData))
        history.push('/categories')
      }
    return (
        <form style={{margin:'20px'}} onSubmit={handleSubmit(onSubmit)} >
                        <div className="form-group">
                            <label htmlFor="title">Category Name</label>
                            <input name="title" type="text" className="form-control" defaultValue={name} id="post-title" placeholder="Enter Category Name"  ref={register({ required: true })} />
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
    );
};

export default UpdateCategories;