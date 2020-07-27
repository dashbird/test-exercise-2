import { Tabs } from '../components/header';

export const SET_ACTIVE_CHART = 'SET_ACTIVE_CHART';
export const SET_TIMEFRAME = 'SET_TIMEFRAME';

export const setActiveChart = (type: Tabs) => ({
  type: SET_ACTIVE_CHART,
  payload: { activeChart: type }
})

export const setTimeframe = (type: string) => ({
  type: SET_TIMEFRAME,
  payload: { timeframe: type }
})