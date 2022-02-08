import { createContext } from 'react';
import { Supervisor } from '../../domain/supervisor';
import { Student } from '../../domain/student';
import { Photographer } from '../../domain/photographer';


export type LoginCredentials = {
    username: string;
    password: string;
}

export type Roles = Supervisor | Student | Photographer

export type UserContextType = {
    accountData: Roles | null
    login: (loginData: LoginCredentials) => void
    logout: () => void
}

export const UserContext = createContext<UserContextType>({
    accountData: null,
    login: () => {},
    logout: () => {},
})
