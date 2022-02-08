/* eslint-disable */
import { Account } from "../entities/account";

export const protobufPackage = "";

export interface AuthenticateAccountRequest {
  username: string;
  passwordHash: string;
}

export interface AuthenticateAccountResponse {
  accessToken: string;
  refreshToken: string;
}

export interface UpdatePasswordRequest {
  accountId: number;
  version: number;
  currentPassword: string;
  newPassword: string;
}

export interface UpdatePasswordResponse {}

export interface AccountService {
  AuthenticateAccount(
    request: AuthenticateAccountRequest
  ): Promise<AuthenticateAccountResponse>;
  UpdateAccount(request: Account): Promise<Account>;
  UpdatePassword(
    request: UpdatePasswordRequest
  ): Promise<UpdatePasswordRequest>;
}
