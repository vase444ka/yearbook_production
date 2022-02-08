/* eslint-disable */
import { Class } from "./class";
import { YearbookType } from "./yearbook-type";

export const protobufPackage = "";

export interface Yearbook {
  id: number;
  version: number;
  class?: Class;
  yearbookType?: YearbookType;
  prepayed?: Date;
  payed?: Date;
  nextMeeting?: Date;
  deadline?: Date;
  created?: Date;
  updated?: Date;
  deleted?: Date;
}
