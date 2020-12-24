import { ILoginDto } from "../../models/dto/iLogin.dto"

export const ADD_USER = 'ADD_USER'
export const REMOVE_USER = 'REMOVE_USER'

interface AddUserAction {
  type: typeof ADD_USER;
  payload: ILoginDto
}

interface RemoveUserAction {
  type: typeof REMOVE_USER;
}

export function AddUser(user: ILoginDto): AddUserAction {
  return { 
    type: ADD_USER,
    payload: user
   }
}

export function toggleTodo(): RemoveUserAction {
  return { 
    type: REMOVE_USER
  }
}

export type UserActionTypes = AddUserAction | RemoveUserAction;