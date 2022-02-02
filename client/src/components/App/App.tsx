import React, { FC } from 'react'
import { SnackbarProvider } from 'notistack'
import { UserContextProvider } from '../../contexts/UserContext/UserContextProvider';
import { Routing } from '../Routing';
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { PhotographerContextProvider } from '../../contexts/PhotographerContext';

export const App: FC = () => {
  return (
    <SnackbarProvider autoHideDuration={2500}>
      <UserContextProvider>
        <PhotographerContextProvider>
          <StyledEngineProvider injectFirst>
            <BrowserRouter>
              <Routing />
            </BrowserRouter>
          </StyledEngineProvider >
        </PhotographerContextProvider>
      </UserContextProvider>
    </SnackbarProvider>
  )
}
