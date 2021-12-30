import React, { FC, useState } from 'react';
import { UserContext, LoginDataType } from './UserContext';
import { Account } from '../../domain/account';


export const UserContextProvider: FC = ({ children }) => {
    const accountSerialized = localStorage.getItem('account')

    const [account, setAccount] = useState<Account | null>(
        accountSerialized != null ? JSON.parse(accountSerialized) : null
        )//this should only execute with first render ever

    const login = (loginData: LoginDataType) => {
        //TODO async checking call
        const newAccount: Account = {
            id: 0,
            username: loginData.username,
            created: new Date(),
            updated: new Date()
        }//FIXME stub
        localStorage.setItem('account', JSON.stringify(newAccount))
        setAccount(newAccount)
    }

    const logout = () => {
        localStorage.removeItem('account')
        setAccount(null)
    }

    return (
        <UserContext.Provider value={{
            account,
            login,
            logout
        }}>
            {children}
        </UserContext.Provider>
    )
}
