import { YearbookType } from '../../domain/yearbook-type';
import { ApiYearbookType } from '../entities/yearbook-type';

export const toDomain = (apiYearbookType: ApiYearbookType): YearbookType => ({
    ...apiYearbookType
})

export const toAPI = (domainYearbookType: YearbookType): ApiYearbookType => ({
    ...domainYearbookType
})
