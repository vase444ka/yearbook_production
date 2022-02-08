import { AxiosInstance } from 'axios';
import { axios } from '../../axios';
import { Yearbook as ApiYearbook } from '../entities/yearbook';
import { Yearbook } from '../../domain/yearbook';
import { toDomain as yearbookToDomain } from '../../api/mappers/yearbook';

type YearbooksQuery = {
    photographerId: number | string
}

const BASE_URL = '/yearbooks'

const PathFactories = {
    GetYearbook: (id: number | string) => `${BASE_URL}/${encodeURIComponent(id)}`,
    QueryYearbooks: (query: YearbooksQuery) => {
        const queryString = new URLSearchParams(query as any).toString()
        console.log(query, queryString)
        return `${BASE_URL}/query${queryString ? `?${queryString}` : ''}`
    },
    UpdateYearbook: (id: number | string) => `${BASE_URL}/${encodeURIComponent(id)}`,
}

export class YearbookService {
    constructor(private readonly axiosInstance: AxiosInstance) {}

    async getYearbook(id: number | string): Promise<Yearbook> {
        const { data } = await this.axiosInstance.get<ApiYearbook>(PathFactories.GetYearbook(id))
        return yearbookToDomain(data)
    }

    async queryYearbooks(query: YearbooksQuery): Promise<Yearbook[]> {
        const { data } = await this.axiosInstance.get<{ yearbooks: ApiYearbook[] }>(PathFactories.QueryYearbooks(query))
        return data.yearbooks.map(yearbookToDomain)
    }

    async updateYearbook(yearbook: Yearbook): Promise<Yearbook> {
        const { data } = await this.axiosInstance.put<ApiYearbook>(PathFactories.UpdateYearbook(yearbook.id), yearbook)
        return yearbookToDomain(data)
    }
}

export const serviceInstance = new YearbookService(axios)
