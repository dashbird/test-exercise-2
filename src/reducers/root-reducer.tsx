import { SET_ACTIVE_CHART, SET_TIMEFRAME } from '../actions/chart-settings-actions';
import { TabEnum } from '../components/tabs';
import { IInformation } from '../components/information';
import { SET_DATA } from '../actions/data-fetching-actions';
import { generateNames } from '../helpers';

export interface IData {
  [key: string]: {
    name: string,
    x: number,
    y: number,
  }[]
}

export interface IState {
  activeChart: TabEnum;
  activeValue?: number;
  activeData: any;
  average: {
    [key: string]: string;
  }
  information: IInformation;
  data: any;
  timeframe: string;
}

export const INITIAL_STATE: IState = {
  activeChart: TabEnum.AVG_RESPONSE_DELAY,
  activeData: undefined,
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
  average: {},
  timeframe: 'Last 24 hours'
};

// TODO: types
export default function rootReducer(state = INITIAL_STATE, action: any): IState {
  let activeData;
  switch (action.type) {
    case SET_ACTIVE_CHART:
      activeData = generateNames(state.data[action.payload.activeChart], state.timeframe)
      return {
        ...state,
        activeData,
        activeChart: action.payload.activeChart
      };

    case SET_TIMEFRAME:
      activeData = generateNames(state.data[state.activeChart], action.payload.timeframe)
      return {
        ...state,
        activeData,
        timeframe: action.payload.timeframe
      };

    case SET_DATA:
      activeData = generateNames(action.payload.data[state.activeChart], state.timeframe)
      return {
        ...state,
        activeData,
        data: action.payload.data,
        average: action.payload.avgData,
      };


    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}