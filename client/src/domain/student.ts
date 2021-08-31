import { Account } from './account';

export type Student = {
    id: number;
    firstName: string;
    lastName: string;
    quote: string;
    chosePortrait: boolean;
    classId: number;
    account: Account | undefined;
}
