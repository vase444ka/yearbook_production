import React, { FC } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import { PhotographerContextProvider } from '../../contexts/PhotographerContext';
import { YearbooksPage } from '../YearbooksPage';
import { EditYearbookPage } from '../EditYearbookPage';
import { LoginPage } from '../LoginPage/LoginPage';
import { UserContextProvider } from '../../contexts/UserContext/UserContextProvider';

export const App: FC = () => {
  //TODO if not logged in, redirect to /login after /login path 
  //TODO decide what to do when user is not logged in 
  return (
      <BrowserRouter>
          <SnackbarProvider autoHideDuration={2500}>
            <UserContextProvider>
                <Route exact path="/login">
                  <LoginPage />
                </Route>
              <PhotographerContextProvider>
                <Route exact path="/">
                    <YearbooksPage />
                </Route>
                <Route exact path="/yearbooks/:id">
                  <EditYearbookPage />
                </Route>
              </PhotographerContextProvider>
            </UserContextProvider>
          </SnackbarProvider>
      </BrowserRouter>
  )
}
