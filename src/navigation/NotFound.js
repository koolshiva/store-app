import React from "react";
import { useContext } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { authContext } from "./AuthContext";
import useProvideAuth from "./useProvideAuth";

const NotFound = () => {
    // const auth = useProvideAuth();
    const auth = useContext(authContext);
    const navigate = useNavigate();
    const [location] = useSearchParams();
    debugger;
    return (
        
        <button value="click" onClick={()=>{auth.signIn(location).then(()=>{
            debugger;
            navigate(location.get('location'));
        })}}/>

    );
};
export default NotFound;