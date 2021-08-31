import { Class } from './class';
import { YearbookType } from './yearbook-type';

export type Yearbook = {
    id: number;
    version: number;
    class: Class;
    title: string;
    yearbookType: YearbookType;
    prepayed: Date;
    payed: Date;
    nextMeeting: Date;
    deadline: Date;
    created: Date;
    updated: Date;
}
