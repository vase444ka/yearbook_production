import { ApiClass } from '../entities/class';
import { Class } from '../../domain/class';

export const toDomain = (apiClass: ApiClass): Class => ({
    ...apiClass
})

export const toAPI = (domainClass: Class): ApiClass => ({
    ...domainClass
})
