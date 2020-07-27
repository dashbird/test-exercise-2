import { TabEnum } from '../components/tabs';
import { Timeframes } from '../components/time-picker';

export const SET_ACTIVE_CHART = 'SET_ACTIVE_CHART';
export const SET_TIMEFRAME = 'SET_TIMEFRAME';

export const setActiveChart = (type: TabEnum) => ({
  type: SET_ACTIVE_CHART,
  payload: { activeChart: type }
})

export const setTimeframe = (timeframe: Timeframes) => ({
  type: SET_TIMEFRAME,
  payload: { timeframe }
})