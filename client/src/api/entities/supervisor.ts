/* eslint-disable */
import { Account } from "../entities/account";

export const protobufPackage = "";

export interface Supervisor {
  id: number;
  name: string;
  contact: string;
  isViber: boolean;
  isTelegram: boolean;
  yearbookId: number;
  account?: Account;
}
