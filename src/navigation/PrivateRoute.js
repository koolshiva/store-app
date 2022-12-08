import React from "react";
import { useContext } from "react";
import { Navigate, redirect, Route, useLocation } from "react-router-dom";
import AuthContext, { authContext, useAuth } from "./AuthContext";
import useProvideAuth from "./useProvideAuth";

const PrivateRoute = ({children, ...rest}) => {
    const loc = useLocation();
    debugger;
    const loca = '/notfound?location='+rest.path;
    const user = useContext(authContext);
    return (
        <React.Fragment>
            {user ? <p>Now this will work</p> : <Navigate to={loca}/>}
        </React.Fragment>
    ); 
};

export default PrivateRoute;