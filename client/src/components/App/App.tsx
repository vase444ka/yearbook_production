import React, { FC } from 'react'
import { SnackbarProvider } from 'notistack'
import { UserContextProvider } from '../../contexts/UserContext/UserContextProvider';
import { Routing } from '../Routing';

export const App: FC = () => {
  //TODO if not logged in, redirect to /login after /login path 
  //TODO decide what to do when user is not logged in 
  return (
          <SnackbarProvider autoHideDuration={2500}>
            <UserContextProvider>
              <Routing/>
            </UserContextProvider>
          </SnackbarProvider>
  )
}
