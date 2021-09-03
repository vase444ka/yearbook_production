import { useContext, useMemo } from 'react'
import axiosImport, { AxiosInstance } from 'axios'

import { mockAxios } from "../../dev/mock-axios"
import { UserContext } from "../contexts/UserContext";

type UseAxiosReturnType = {
    axios: AxiosInstance
}
export const useAxios = (): UseAxiosReturnType => {
    const { token } = useContext(UserContext)
    const axios = useMemo(() => axiosImport.create({
        baseURL: `http://localhost:8080/v1`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    }), [token])

    mockAxios(axios)

    return { axios }
}
