import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import PostsPage from "../pages/PostsPage";
import Error from "../pages/Error";

const AppRouter = () => {
    return (
        <Switch>
            <Route path='/about'>
                <AboutPage/>
            </Route>
            <Route path='/posts'>
                <PostsPage/>
            </Route>
            <Route path='/error'>
                <Error/>
            </Route>
            <Redirect to='/error'/>
        </Switch>
    );
};

export default AppRouter;