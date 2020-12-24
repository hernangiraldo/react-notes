import { combineReducers } from "redux"
import { userReducer } from "./user.reducers"

export const rootReducer = combineReducers({
  userReducer,
})

export type RootState = ReturnType<typeof rootReducer>