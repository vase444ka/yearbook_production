/* eslint-disable */
import { Yearbook } from "../entities/yearbook";
import { Class } from "../entities/class";

export const protobufPackage = "";

export interface GetYearbookRequest {
  id: number;
}

export interface YearbooksQuery {
  photographerId: number;
}

export interface QueryYearbooksResponse {
  yearbooks: Yearbook[];
}

export interface DeleteYearbookRequest {
  id: number;
  version: number;
}

export interface YearbookService {
  CreateYearbook(request: Yearbook): Promise<Yearbook>;
  GetYearbook(request: GetYearbookRequest): Promise<Yearbook>;
  QueryYearbooks(request: YearbooksQuery): Promise<QueryYearbooksResponse>;
  UpdateYearbook(request: Yearbook): Promise<Yearbook>;
  UpdateClass(request: Class): Promise<Class>;
  DeleteYearbook(request: DeleteYearbookRequest): Promise<Yearbook>;
}
