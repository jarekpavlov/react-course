import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import PostsPage from "../pages/PostsPage";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";

const AppRouter = () => {
    return (
        <Switch>
            <Route path='/about'>
                <AboutPage/>
            </Route>
            <Route exact path='/posts'>
                <PostsPage/>
            </Route>
            <Route exact path='/posts/:id'>
                <PostIdPage/>
            </Route>
            <Route path='/error'>
                <Error/>
            </Route>
            <Redirect to='/error'/>
        </Switch>
    );
};

export default AppRouter;