import React from "react";
import { useSelector } from "react-redux";
import SInglePost from "./SInglePost";

const PostArray = () => {
    const posts =  useSelector(state=>state?state.postReducer.posts:'')
    console.log(posts);
    return (
        <React.Fragment>
        {
            posts && posts.map((post,index)=><SInglePost key={index} post={post} />)
        }
        </React.Fragment>
    );
};

export default PostArray;