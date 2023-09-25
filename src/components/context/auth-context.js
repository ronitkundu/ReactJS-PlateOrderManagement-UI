import React, { useState } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    userTd:"",
    onlogout: () => { },
    onlogin: (userid,password) => { }
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userTd, seUserTd] = useState("");
    const logoutHandler = () => {
        seUserTd("")
        setIsLoggedIn(false);
    }
    const loginHandler = (userid) => {
        seUserTd(userid);
        setIsLoggedIn(true);
    }
    return (
        <AuthContext.Provider
            value=
            {{ isLoggedIn: isLoggedIn,
                userTd:userTd,
                onlogout:logoutHandler,
                onlogin:loginHandler
                 }}>{props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;