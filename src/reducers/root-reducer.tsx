import { SET_CHART } from '../actions/chart-settings-actions';
import { Tabs } from '../components/header';

export interface IState {
  activeChart: string
}

export const INITIAL_STATE: IState = {
  activeChart: Tabs.AVG_RESPONSE_DELAY,
};

export default function rootReducer(state = INITIAL_STATE, action: any): IState {
  switch (action.type) {
    case SET_CHART:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        activeChart: action.payload.activeChart
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}