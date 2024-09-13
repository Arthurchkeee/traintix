import {Station} from "../../models/station.model";
import {loadStationsSuccess} from "../actions/api.actions";
import {createReducer, on} from "@ngrx/store";

export interface State {
  stations: Station[];
}
export const initialState: State = {
  stations:[],
};

export const apiReducer = createReducer(
  initialState,
  on(loadStationsSuccess, (state,{stations}) => ({ ...state, stations:stations})),
);
