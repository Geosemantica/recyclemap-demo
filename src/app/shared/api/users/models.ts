import { BaseResponse, User, UserEditable } from '@app/shared/api/base.models';

interface UsersDeleteError {
  isSuccess: false;
  errors: {
    message: string;
  };
}

export interface UserEditablePatch extends Omit<UserEditable, 'userId'> {
  passphrase: string;
}

export interface UsersResponse extends BaseResponse<User[]> {}

export interface UsersEditableResponse extends BaseResponse<UserEditable> {}

export interface UsersPatchResponse extends BaseResponse<number> {}
export interface UsersDeleteResponse extends BaseResponse<UsersDeleteError | undefined> {}
