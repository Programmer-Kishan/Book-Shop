import React, { useState, useEffect } from 'react'

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogin: (fname, lname, email) => {},
    onLogout: () => {},
    greetName: '',
    onNameChange: () => {}
})

export const AuthContextProvider = (props) => {

    console.log("Hello")

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [name, setName] = useState('');

    useEffect(() => {
        const loginInfo = localStorage.getItem("isLoggedIn");
        const loginName = localStorage.getItem('fname');
        if (loginInfo) {
            setIsLoggedIn(true);
            setName(loginName);
        }
    }, []);

    const handleLogin = (fnameValidity, lnameValidity, emailValidity) => {
        if (fnameValidity && lnameValidity && emailValidity) {
        localStorage.setItem('isLoggedIn', "1");
        localStorage.setItem('fname', fnameValidity)
        setIsLoggedIn(true);
        }
    }

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem('fname');
        setIsLoggedIn(false);
    }

    const nameHandler = (fname) => {
        setName(fname);
    } 

    return (
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn, 
            onLogin: handleLogin,
            onLogout: handleLogout,
            greetName: name,
            onNameChange: nameHandler
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;