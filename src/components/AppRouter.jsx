import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context";
import Loader from "./ui/loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if(isLoading) {
        return <Loader/>
    }
    return (
        isAuth
            ?
            <Switch>
                {privateRoutes.map((rout) => (
                    <Route
                        key={rout.path}
                        path={rout.path}
                        component={rout.component}
                        exact={rout.exact}/>
                ))}
                <Redirect to='/posts'/>
            </Switch>
            :
            <Switch>
                {publicRoutes.map((rout) => (
                    <Route
                        key={rout.path}
                        path={rout.path}
                        component={rout.component}
                        exact={rout.exact}/>
                ))}
                <Redirect to='/login'/>
            </Switch>

    );
};

export default AppRouter;