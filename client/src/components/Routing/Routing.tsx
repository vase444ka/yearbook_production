import React, { FC, useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { LoginPage } from "../LoginPage/LoginPage";
import { YearbooksPage } from '../YearbooksPage';
import { EditYearbookPage } from '../EditYearbookPage';
import { UserContext, UserContextType } from "../../contexts/UserContext/UserContext";


export const Routing: FC = () => {
    const userContext: UserContextType = useContext(UserContext)
    console.log(userContext.account)

    if (userContext.account === null)
        return (
            <Routes>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="*" element={<Navigate to="/login" />}/>
            </Routes >
        )

    return (
        <Routes>
            <Route path="/" element={<YearbooksPage />}/>
            <Route path="/yearbooks/:id" element={<EditYearbookPage />}/>
            <Route path="/login" element={<Navigate to="/" />}/>
            <Route path="*" element={<h1>404 lol</h1>}/>
        </Routes>
    )
}