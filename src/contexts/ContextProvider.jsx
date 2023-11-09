import React, { useContext, useState,createContext } from 'react'

// create Context
const StateContext = createContext({
    user: null,
    token: null,
    role: null,
    notification: null,
    _setToken: () => { },
    setUser: () => { },
    _setRole: ()=>{},
    setNotification: () => {}

})

export default function ContextProvider({ children }) {
    const [user, setUser] = useState({});
    const [token, setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    const [role, setRole] = useState(localStorage.getItem('ACCESS_ROLE'));

    // const [token, setToken] = useState(123);
    // const [role, setRole] = useState(2);
    const [notification, _setNotification] = useState('');


    const _setToken = (token) => {
        setToken(token);
        if (token) {
            localStorage.setItem('ACCESS_TOKEN',token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }
    const _setRole = (role) => {
        setRole(role);
        // console.log('Context SetRole',role)
        if (role) {
            localStorage.setItem('ACCESS_ROLE', role);
        } else {
            localStorage.removeItem('ACCESS_ROLE');
        }
    }

    const setNotification = message => {
        _setNotification(message);
    
        setTimeout(() => {
          _setNotification('')
        }, 5000)
      }



    return (
        <StateContext.Provider value={{
            user,
            token,
            role,
            _setToken,
            setUser,
            _setRole,
            notification,
            setNotification
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);