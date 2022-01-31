import { AxiosInstance } from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter'
import { Chance } from 'chance';

import { mockPhotographer, mockYearbook, mockYearbookType } from './mocks'
import { sample } from './utils';

const chance = new Chance()

export const mockAxios = (axios: AxiosInstance) => {
    const axiosMock = new AxiosMockAdapter(axios, { onNoMatch: 'throwException' })

    const photographer = mockPhotographer()

    const yearbookTypes = new Array(chance.integer({ min: 0, max: 2 }) + 2)
        .fill(null)
        .map(() => mockYearbookType({ photographerId: photographer.id }))
    const yearbooks = new Array(chance.integer({ min: 3, max: 8 }) + 5)
        .fill(null)
        .map(() => mockYearbook({ yearbookType: sample(yearbookTypes) }))

    axiosMock.onGet(`/photographers/${photographer.id}`).reply(config => {
        console.log('onGet `/photographers/:id` ---', config)
        return [200, photographer]
    })

    axiosMock.onGet(/\/yearbooks\/\d+/).reply(config => {
        console.log('onGet `/yearbooks/:id` ---', config)

        const serializedId = config.url!.match(/\/yearbooks\/(?<id>\d+)/)!.groups!['id']
        const id = Number(serializedId)
        const yearbook = yearbooks.find(yearbook => yearbook.id === id)
        if (!yearbook) {
            return [400, 'Invalid id supplied']
        }

        return [200, yearbook]
    })

    axiosMock.onGet(/\/yearbooks\/query\/?.*/).reply(config => {
        console.log('onGet `/yearbooks/query` ---', config)

        const [searchString] = config.url?.match(/\?.*/) || []
        const photographerIdSerialized = new URLSearchParams(searchString).get('photographerId')

        if (photographerIdSerialized) {
            const photographerId = Number(photographerIdSerialized)
            if (Number.isNaN(photographerId)) {
                return [400, 'Invalid photographerId supplied']
            }

            const relevantYearbooks = yearbooks.filter(yearbook => yearbook.yearbookType.photographerId === photographerId)
            return [200, { yearbooks: relevantYearbooks }]
        }

        return [200, { yearbooks }]
    })

    axiosMock.onPut(/\/yearbooks\/\d+/).reply(config => {
        console.log('onPut `/yearbooks/:id` ---', config)

        const serializedId = config.url!.match(/\/yearbooks\/(?<id>\d+)/)!.groups!['id']
        const id = Number(serializedId)
        const yearbook = yearbooks.find(yearbook => yearbook.id === id)
        if (!yearbook) {
            return [400, 'Invalid id supplied']
        }

        console.log('update', config.data)
        console.log('before update', JSON.stringify(yearbook, null, 4))
        Object.assign(yearbook, JSON.parse(config.data))
        console.log('after update', JSON.stringify(yearbook, null, 4))
        return [200, yearbook]
    })

    axiosMock.onAny().passThrough()
}
