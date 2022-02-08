import React, { FC, useEffect, useState } from 'react';
import { axios } from '../../axios';
import { UserContext, LoginCredentials, Roles as Roles } from './UserContext';

const ACCESS_TOKEN = 'access_token'


export const UserContextProvider: FC = ({ children }) => {
    const [accountData, setAccountData] = useState<Roles | null>(null)
        
    useEffect(()=>{
        const accessToken = localStorage.getItem(ACCESS_TOKEN)

        if (accessToken){
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}$`
            //TODO fetch and set acc data
        }
    })

    const login = (loginCredentials: LoginCredentials) => {
        let accessToken: string
        //TODO auth request
        localStorage.setItem(ACCESS_TOKEN, accessToken)
        
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}$`

        let newAccount: Roles
        //TODO fetch and set acc data

        setAccountData(newAccount)
    }

    const logout = () => {
        localStorage.removeItem(ACCESS_TOKEN)
        setAccountData(null)
        delete axios.defaults.headers.common['Authorization']
    }

    return (
        <UserContext.Provider value={{
            accountData,
            login,
            logout
        }}>
            {children}
        </UserContext.Provider>
    )
}
