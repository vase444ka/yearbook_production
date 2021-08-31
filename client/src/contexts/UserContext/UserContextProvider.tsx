import React, { FC } from 'react';
import { UserContext } from './UserContext';
import { Account } from '../../domain/account';
import { Redirect } from 'react-router-dom';

export const UserContextProvider: FC = ({ children }) => {
    let account: Account | null = null
    const accountSerialized = localStorage.getItem('account')
    if (accountSerialized) {
        account = JSON.parse(accountSerialized)
    }
    if (!account) {
        return <Redirect to='/login' />
    }

    const login = (account: Account) => {
        localStorage.setItem('account', JSON.stringify(account))
    }
    const logout = () => {
        localStorage.removeItem('account')
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
