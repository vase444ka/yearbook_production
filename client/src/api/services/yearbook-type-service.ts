/* eslint-disable */
import { YearbookType } from "../entities/yearbook-type";

export const protobufPackage = "";

export interface GetYearbookTypeRequest {
  id: number;
}

export interface QueryYearbookTypesRequest {
  photographerId: number;
}

export interface QueryYearbookTypesResponse {
  students: YearbookType[];
}

export interface DeleteYearbookTypeRequest {
  id: number;
  version: number;
}

export interface YearbookTypeService {
  CreateYearbookType(request: YearbookType): Promise<YearbookType>;
  GetYearbookType(request: GetYearbookTypeRequest): Promise<YearbookType>;
  QueryYearbookTypes(
    request: QueryYearbookTypesRequest
  ): Promise<QueryYearbookTypesResponse>;
  UpdateYearbookType(request: YearbookType): Promise<YearbookType>;
  DeleteYearbookType(request: DeleteYearbookTypeRequest): Promise<YearbookType>;
}
