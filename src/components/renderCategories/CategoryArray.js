import { useSelector } from "react-redux";
import React from 'react';
import SingleCategory from "./SingleCategory";
import { Button } from "react-bootstrap";
const CategoryArray = () => {
    const categories =useSelector(state => state?state.categoryReducer.categories:'')
    return (
        <React.Fragment>
        <Button href='/'>Return To Home</Button>
          {
              categories.map((category,index)=><SingleCategory key={index} category={category} />)
          }  
        </React.Fragment>
    );
};

export default CategoryArray;