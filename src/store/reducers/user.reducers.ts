import { UserActionTypes, ADD_USER, REMOVE_USER } from "../actions/user.actions";
import { ILoginDto } from "../../models/dto/iLogin.dto";

export interface AppState {
  user: ILoginDto
}

const initialState: AppState = {
  user: {
    email: '',
    password: ''
  }
}

export function userReducer(state = initialState, action: UserActionTypes): AppState {
  switch (action.type) {
    case ADD_USER:
      return Object.assign({}, state, {
        user: action.payload
      })
    case REMOVE_USER:
      return Object.assign({}, state, {
        user: Object.assign({})
      })
    default:
      return state
  }
}