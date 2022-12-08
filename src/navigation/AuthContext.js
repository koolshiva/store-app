import React, { createContext } from "react";
import { useContext } from "react";
import useProvideAuth from "./useProvideAuth";

export const authContext = createContext(null);
const AuthContext = (props) => {
    const user = useProvideAuth();
    return <authContext.Provider value={user}>
        {props.children}
    </authContext.Provider>
};

export function useAuth() {
    return useContext(authContext);
}
  

export default AuthContext;