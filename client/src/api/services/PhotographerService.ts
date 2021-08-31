import { AxiosInstance } from 'axios';
import { axios } from '../../axios';
import { Photographer } from '../../domain/photographer';

const BASE_URL = '/photographers'

const PathFactories = {
    GetPhotographer: (id: number | string) => `${BASE_URL}/${encodeURIComponent(id)}`,
}

export class PhotographerService {
    constructor(private readonly axiosInstance: AxiosInstance) {}

    async getPhotographer(id: number | string) {
        const { data } = await this.axiosInstance.get<Photographer>(PathFactories.GetPhotographer(id))
        return data
    }
}

export const serviceInstance = new PhotographerService(axios)
