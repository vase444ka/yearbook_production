import axiosImport from 'axios';

export const axios = axiosImport.create({
    baseURL: 'http://localhost:3000/v1' // TODO: /api/v1
})
