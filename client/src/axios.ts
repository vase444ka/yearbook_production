import axiosImport from 'axios';

export const axios = axiosImport.create({
    baseURL: 'http://localhost:8080/v1' // TODO: /api/v1
})