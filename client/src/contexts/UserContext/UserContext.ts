import { createContext } from 'react';
import { Account } from '../../domain/account';

export type LoginDataType = {
    username: string;
    password: string;
}


export type UserContextType = {
    account: Account | null
    login: (loginData: LoginDataType) => void
    logout: () => void
}

export const UserContext = createContext<UserContextType>({
    account: null,
    login: () => {},
    logout: () => {},
})
