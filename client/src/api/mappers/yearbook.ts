import { ApiYearbook } from '../entities/yearbook';
import { Yearbook } from '../../domain/yearbook';
import { toDomain as classToDomain, toAPI as classToAPI } from './class';
import { toAPI as yearbookTypeToAPI, toDomain as yearbookTypeToDomain } from './yearbook-type';

export const toDomain = (apiYearbook: ApiYearbook): Yearbook => ({
    id: apiYearbook.id,
    version: apiYearbook.version,
    class: classToDomain(apiYearbook.class),
    title: formYearbookTitle(apiYearbook),
    yearbookType: yearbookTypeToDomain(apiYearbook.yearbookType),
    deadline: new Date(apiYearbook.deadline),
    payed: new Date(apiYearbook.payed),
    prepayed: new Date(apiYearbook.prepayed),
    nextMeeting: new Date(apiYearbook.nextMeeting),
    created: new Date(apiYearbook.created),
    updated: new Date(apiYearbook.updated),
})

const formYearbookTitle = (yearbook: ApiYearbook) => {
    const { name, grade, school } = yearbook.class
    return `${grade}-${name}, ${school}`
}

export const toAPI = (domainYearbook: Yearbook): ApiYearbook => ({
    id: domainYearbook.id,
    version: domainYearbook.version,
    class: classToAPI(domainYearbook.class),
    yearbookType: yearbookTypeToAPI(domainYearbook.yearbookType),
    deadline: domainYearbook.deadline.toISOString(),
    payed: domainYearbook.payed.toISOString(),
    prepayed: domainYearbook.prepayed.toISOString(),
    nextMeeting: domainYearbook.nextMeeting.toISOString(),
    created: domainYearbook.created.toISOString(),
    updated: domainYearbook.updated.toISOString(),
})
