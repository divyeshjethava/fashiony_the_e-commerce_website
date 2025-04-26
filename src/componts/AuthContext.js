import React, { createContext, useContext, useState, useEffect } from 'react';
import LoginDialog from './LoginDialog';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);

    const OpenDialogHandler = () => setOpenDialog(true);
    const CloseDialogHandler = () => setOpenDialog(false);

  
    useEffect(() => {
        const checkLoginStatus = () => {
            const userToken = localStorage.getItem('userToken');
            const loginTimestamp = localStorage.getItem('loginTimestamp');
            const currentTime = Date.now();
            const expiryTime = 3 * 24 * 60 * 60 * 1000; 

            if (userToken && loginTimestamp) {
               
                if (currentTime - loginTimestamp > expiryTime) {
                  
                    localStorage.removeItem('userToken');
                    localStorage.removeItem('loginTimestamp');
                    setLoggedIn(false);
                } else {
                   
                    setLoggedIn(true);
                }
            } else {
                setLoggedIn(false);
            }
        };
        checkLoginStatus();
    }, []);

    const loginRedirect = () => {
        OpenDialogHandler();
    };
    const loginUser = (token) => {
        const currentTime = Date.now(); 
        localStorage.setItem('userToken', token);
        localStorage.setItem('loginTimestamp', currentTime);

        setLoggedIn(true);  
        CloseDialogHandler();
    };

    const logoutUser = () => {
        localStorage.removeItem('userToken');
        localStorage.removeItem('loginTimestamp');
        setLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ loggedIn, loginRedirect , loginUser ,logoutUser }}>
            {children}
        
            <LoginDialog isOpen={openDialog} onClose={CloseDialogHandler} loginUser={loginUser} />
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
