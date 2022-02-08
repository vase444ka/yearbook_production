/* eslint-disable */
import { Account } from "../entities/account";

export const protobufPackage = "";

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  quote: string;
  chosePortrait: boolean;
  classId: number;
  account?: Account;
}
