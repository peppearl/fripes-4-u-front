import React, {createContext, useState, useContext, useEffect, useCallback} from 'react'

const Context = createContext( {
    user: null,
    token: null,
    role: null
});

export default function UserContext({children}) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [role, setRole] = useState(null);
    const axios = require('axios');
    useEffect(() => {
        if (token == null) {
            setToken(null);
            return;
        }
        console.log(token);
        axios.get("http://localhost:3000/profil", {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((response) => {
            setUser(response.data.username);
            setRole(response.data.role);
        })
    }, [token]);

    const logOut = useCallback( () => {
      setUser(null);
    }, []);

    return (
        <Context.Provider value={{user, token, setUser, setToken, logOut, role}}>
            {children}
        </Context.Provider>
    )
}

export const useUser = () => useContext(Context);

