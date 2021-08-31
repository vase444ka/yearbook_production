import React, { FC, useEffect, useState } from 'react';
import { PhotographerContext } from './PhotographerContext';
import { Photographer } from '../../domain/photographer';
import { serviceInstance as photographerService } from '../../api/services/PhotographerService';
import { useSnackbar } from 'notistack';

export const PhotographerContextProvider: FC = ({ children }) => {
    const [photographer, setPhotographer] = useState<Photographer | null>(null)
    const { enqueueSnackbar } = useSnackbar()

    useEffect(() => {
        const loadPhotographer = async () => {
            try {
                const photographer = await photographerService.getPhotographer(1)
                setPhotographer(photographer)
            } catch (error) {
                console.error('Failed to load photographer:', error)
                enqueueSnackbar('Oops! Something went wrong, try reloading the page.')
            }
        }
        void loadPhotographer()
    }, [])

    return (
        <PhotographerContext.Provider value={{ photographer }}>
            {children}
        </PhotographerContext.Provider>
    )
}
