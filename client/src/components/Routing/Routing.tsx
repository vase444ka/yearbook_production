import React, { FC, useContext } from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";

import { LoginPage } from "../LoginPage/LoginPage";
import { PhotographerContextProvider } from '../../contexts/PhotographerContext';
import { YearbooksPage } from '../YearbooksPage';
import { EditYearbookPage } from '../EditYearbookPage';
import { UserContext, UserContextType } from "../../contexts/UserContext/UserContext";


export const Routing: FC = () => {
    const userContext: UserContextType = useContext(UserContext)
    console.log(userContext.account)

    if (userContext.account === null)
        return (
            <BrowserRouter>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
            </BrowserRouter>
        )

    return (
        <BrowserRouter>
            <PhotographerContextProvider>
                <Route exact path="/">
                    <YearbooksPage />
                </Route>
                <Route exact path="/yearbooks/:id">
                    <EditYearbookPage />
                </Route>
            </PhotographerContextProvider>
        </BrowserRouter>
    )

}