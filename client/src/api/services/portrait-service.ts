/* eslint-disable */
import { Portrait } from "../entities/portrait";

export const protobufPackage = "";

export interface QueryPortraitsRequest {
  yearbookId: number;
}

export interface QueryPortraitsResponse {
  portraits: Portrait[];
}

export interface DeletePortraitRequest {
  id: number;
  version: number;
}

export interface PortraitService {
  CreatePortrait(request: Portrait): Promise<Portrait>;
  QueryPortraits(
    request: QueryPortraitsRequest
  ): Promise<QueryPortraitsResponse>;
  UpdatePortrait(request: Portrait): Promise<Portrait>;
  DeletePortrait(request: DeletePortraitRequest): Promise<Portrait>;
}
