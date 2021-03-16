import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { postModalOpen } from '../../redux/action/postActions';
import PostArray from '../renderPosts/PostArray';
const Landing = () => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(postModalOpen())
    }
    return (
        <div style={{margin:'20px'}} >
        <Link to='/create-post' ><Button  onClick={handleClick} variant="primary">Create a New Post</Button></Link>
        <Link className="ml-4" to='/categories' ><Button  variant="secondary">See All Categories</Button></Link>
        <PostArray/>
        </div>
    );
};

export default Landing;