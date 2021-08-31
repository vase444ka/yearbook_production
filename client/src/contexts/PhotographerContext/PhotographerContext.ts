import { Photographer } from '../../domain/photographer';
import { createContext } from 'react';

export type PhotographerContextType = {
    photographer: Photographer | null
}

export const PhotographerContext = createContext<PhotographerContextType>({
    photographer: null
})
