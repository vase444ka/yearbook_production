/* eslint-disable */
export const protobufPackage = "";

export enum Status {
  PENDING = 0,
  IN_PROGRESS = 1,
  SUCCESS = 2,
  FAILED = 3,
  UNRECOGNIZED = -1,
}

export interface MetaData {
  name: string;
  type: string;
}

export interface File {
  content: Uint8Array;
}

export interface UploadFileRequest {
  metadata?: MetaData | undefined;
  file?: File | undefined;
}

export interface UploadFileResponse {
  name: string;
  status: Status;
}

export interface StaticsService {
  UploadFile(request: UploadFileRequest): Promise<UploadFileResponse>;
}
