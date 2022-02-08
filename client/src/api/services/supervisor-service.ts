/* eslint-disable */
import { Supervisor } from "../entities/supervisor";

export const protobufPackage = "";

export interface GetSupervisorRequest {
  id: number;
}

export interface QuerySupervisorsRequest {
  yearbookId: number;
}

export interface QuerySupervisorsResponse {
  supervisors: Supervisor[];
}

export interface DeleteSupervisorRequest {
  id: number;
  version: number;
}

export interface SupervisorService {
  CreateSupervisor(request: Supervisor): Promise<Supervisor>;
  GetSupervisor(request: GetSupervisorRequest): Promise<Supervisor>;
  QuerySupervisors(
    request: QuerySupervisorsRequest
  ): Promise<QuerySupervisorsResponse>;
  UpdateSupervisor(request: Supervisor): Promise<Supervisor>;
  DeleteSupervisor(request: DeleteSupervisorRequest): Promise<Supervisor>;
}
