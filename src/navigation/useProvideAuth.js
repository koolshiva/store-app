import { useState } from "react";

export default function useProvideAuth() {
    const [ user, setUser ] = useState();
    const signIn = async (username, password) => {
        const userValue = await loginUser();
        setUser(userValue);
        return Promise.resolve(true);
    };

    const signOut = async (username, password) => {
        const userValue= await logoutUser();
        setUser(userValue);
        return Promise.resolve(false);
    };

    return {user, signIn, signOut};
}

const loginUser = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{resolve({name: 'First Last', userId: 1234})}, 2000);
    });
}

const logoutUser = () => {
    return new Promise((resolve) => {
        setTimeout(() => {resolve(null)}, 2000);
    });
};