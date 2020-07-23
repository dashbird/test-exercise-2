import { SET_CHART } from '../actions/chart-settings-actions';
import { Tabs } from '../components/header';
import { IInformation } from '../components/information';
import { time } from 'console';

export interface IState {
  activeChart: string;
  information: IInformation;
}

export const INITIAL_STATE: IState = {
  activeChart: Tabs.AVG_RESPONSE_DELAY,
  information: {
    resources: [
      {
        info: 'usage-service-prod-record-inventory-usage',
        description: '125ms'
      }
    ],
    insights: [
      {
        info: 'Queue is too long',
        description: 'Duration (in ms) was above 1 on average during the last 1 minute',
        time: new Date(2020, 6, 20)
      }
    ],
    alerts: [
      {
        info: 'Incident #414527',
        description: 'Duration (in ms) was above 1 on average during the last 1 minute',
        time: new Date(2020, 6, 3)
      },
      {
        info: 'Incident #414525',
        description: 'Duration (in ms) was above 1 on average during the last 1 minute',
        time: new Date(2020, 6, 15)
      }
    ]
  }
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