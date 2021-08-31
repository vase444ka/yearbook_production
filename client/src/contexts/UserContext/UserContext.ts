import { createContext } from 'react';
import { Account } from '../../domain/account';

export type PhotographerContextType = {
    account: Account | null
    login: (account: Account) => void
    logout: () => void
}

export const UserContext = createContext<PhotographerContextType>({
    account: null,
    login: () => {},
    logout: () => {},
})
