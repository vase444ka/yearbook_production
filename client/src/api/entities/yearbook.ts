import { ApiClass } from './class';
import { ApiYearbookType } from './yearbook-type';

export type ApiYearbook = {
    id: number;
    version: number;
    class: ApiClass;
    yearbookType: ApiYearbookType;
    prepayed: string;
    payed: string;
    nextMeeting: string;
    deadline: string;
    created: string;
    updated: string;
    deleted?: string;
}
