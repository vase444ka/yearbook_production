/* eslint-disable */
import { Student } from "../entities/student";

export const protobufPackage = "";

export interface CreateStudentsBatchRequest {
  students: Student[];
}

export interface CreateStudentsBatchResponse {
  students: Student[];
}

export interface GetStudentRequest {
  id: number;
}

export interface QueryStudentsRequest {
  yearbookId: number;
}

export interface QueryStudentsResponse {
  students: Student[];
}

export interface DeleteStudentRequest {
  id: number;
  version: number;
}

export interface StudentService {
  CreateStudent(request: Student): Promise<Student>;
  CreateStudentsBatch(
    request: CreateStudentsBatchRequest
  ): Promise<CreateStudentsBatchResponse>;
  GetStudent(request: GetStudentRequest): Promise<Student>;
  QueryStudents(request: QueryStudentsRequest): Promise<QueryStudentsResponse>;
  UpdateStudent(request: Student): Promise<Student>;
  DeleteStudent(request: DeleteStudentRequest): Promise<Student>;
}
