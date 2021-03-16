import React from 'react';
import Landing from './components/landing/Landing';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Post from './components/post/Post';
import UpdatePosts from './components/updatePosts/UpdatePosts';
import CategoryArray from './components/renderCategories/CategoryArray';
import UpdateCategories from './components/updateCategories/UpdateCategories';
function App() {
  return (
    <Router>
    <Switch>
    <Route exact path = '/' component={Landing}/>
    <Route exact path = '/create-post' component={Post}/>
    <Route exact path = '/update-post/:id' component={UpdatePosts}/>
    <Route exact path = '/categories' component={CategoryArray}/>
    <Route exact path = '/update-categories/:name' component={UpdateCategories}/>
    </Switch>
    </Router>
  );
}

export default App;
