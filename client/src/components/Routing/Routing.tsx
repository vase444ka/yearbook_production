import React, { FC, useContext } from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";

import { LoginPage } from "../LoginPage/LoginPage";
import { PhotographerContextProvider } from '../../contexts/PhotographerContext';
import { YearbooksPage } from '../YearbooksPage';
import { EditYearbookPage } from '../EditYearbookPage';
import { UserContext, UserContextType } from "../../contexts/UserContext/UserContext";
import { Box } from "@mui/system";


export const Routing: FC = () => {
    const userContext: UserContextType = useContext(UserContext)
    console.log(userContext.account)

    return (
        <BrowserRouter>
            {userContext.account === null &&
                <Route exact path="/login">
                    <LoginPage />
                </Route>
            }

            {userContext.account === null &&
                <Redirect to="/login" />
            }

            <PhotographerContextProvider>
                <Route exact path="/">
                    <YearbooksPage />
                </Route>
                <Route exact path="/yearbooks/:id">
                    <EditYearbookPage />
                </Route>

                <Redirect to="/" />
            </PhotographerContextProvider>
        </BrowserRouter>
    )

}