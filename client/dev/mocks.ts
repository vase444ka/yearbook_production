import { Chance } from 'chance';

import { Photographer } from '../src/domain/photographer';
import { Account } from '../src/domain/account';
import { Yearbook } from '../src/domain/yearbook';
import { Class } from '../src/domain/class';
import { YearbookType } from '../src/domain/yearbook-type';
import { sample } from './utils';
import { ApiYearbook } from '../src/api/entities/yearbook';

const chance = new Chance()

const generateId = () => chance.integer({ min: 1 })

export const mockAccount = (override?: Partial<Account>): Account => ({
    id: generateId(),
    username: chance.string({ alpha: true, length: 10 }),
    created: new Date(),
    updated: new Date(),
    ...override,
})

export const mockPhotographer = (override?: Partial<Photographer>): Photographer => ({
    id: 1,
    account: mockAccount(),
    ...override,
})

export const mockClass = (override?: Partial<Class>): Class => ({
    id: 1,
    version: 1,
    name: chance.character({ alpha: true, casing: 'upper' }),
    grade: chance.integer({ min: 1, max: 11 }),
    school: chance.city(),
    ...override,
})

export const mockYearbookType = (override?: Partial<YearbookType>): YearbookType => ({
    id: 1,
    name: sample(['Mini', 'Maxi', 'Mega']),
    photographerId: 1,
    groupMeetingsCount: chance.integer({ min: 1, max: 3 }),
    portraitMeetingsCount: chance.integer({ min: 1, max: 3 }),
    price: chance.integer({ min: 30, max: 70 }) * 10,
    ...override,
})

export const mockYearbook = (override?: Partial<ApiYearbook>): ApiYearbook => ({
    id: generateId(),
    class: mockClass(),
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
    version: 1,
    yearbookType: mockYearbookType(),
    deadline: new Date().toISOString(),
    nextMeeting: new Date().toISOString(),
    prepayed: new Date().toISOString(),
    payed: new Date().toISOString(),
    ...override,
})
