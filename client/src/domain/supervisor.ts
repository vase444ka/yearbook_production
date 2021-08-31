import { Account } from './account';

export type Supervisor = {
    id: number;
    name: string;
    contact: string;
    isViber: boolean;
    isTelegram: boolean;
    yearbookId: number;
    account: Account | undefined;
}
