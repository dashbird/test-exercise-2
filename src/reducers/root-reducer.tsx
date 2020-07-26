import { SET_ACTIVE_CHART, SET_ACTIVE_VALUE } from '../actions/chart-settings-actions';
import { Tabs } from '../components/header';
import { IInformation } from '../components/information';
import { SET_DATA } from '../actions/data-fetching-actions';

interface IChart {
  activeChart: Tabs;

}

interface IData {
  [key: string]: any
}

export interface IState {
  activeChart: Tabs;
  activeValue?: number;
  activeData: any;
  average: {
    [key: string]: string;
  }
  information: IInformation;
  data: IData;
}

export const INITIAL_STATE: IState = {
  activeChart: Tabs.AVG_RESPONSE_DELAY,
  activeData: undefined,
  information: {
    // TODO: fetch some random data here
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
        time: new Date(2020, 6, 19)
      },
      {
        info: 'Incident #414525',
        description: 'Duration (in ms) was above 1 on average during the last 1 minute',
        time: new Date(2020, 6, 15)
      }
    ]
  },
  data: {},
  average: {}
};

// TODO: types
export default function rootReducer(state = INITIAL_STATE, action: any): IState {
  switch (action.type) {
    case SET_ACTIVE_CHART:
      return {
        ...state,
        activeData: state.data[action.payload.activeChart],
        activeChart: action.payload.activeChart
      };

    case SET_ACTIVE_VALUE:
      return {
        ...state,
        activeValue: action.payload.activeValue
      };

    case SET_DATA:
      // TODO: set avg value
      console.log('act', action.payload.data[state.activeChart]);
      console.log(action.payload.data)
      return {
        ...state,
        activeData: action.payload.data[state.activeChart],
        data: action.payload.data
      };


    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}