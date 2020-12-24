import { RootState } from "../reducers";
import { ILoginDto } from "../../models/dto/iLogin.dto";

export const getUser = (state: RootState): ILoginDto => state.userReducer.user