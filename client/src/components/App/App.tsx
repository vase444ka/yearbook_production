import React, { FC } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import { PhotographerContextProvider } from '../../contexts/PhotographerContext';
import { YearbooksPage } from '../YearbooksPage';
import { EditYearbookPage } from '../EditYearbookPage';
import { LoginPage } from '../LoginPage/LoginPage';

export const App: FC = () => {
  return (
      <BrowserRouter>
          <SnackbarProvider autoHideDuration={2500}>
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
          </SnackbarProvider>
      </BrowserRouter>
  )
}
