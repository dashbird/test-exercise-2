import { Tabs } from '../components/header';

export const SET_ACTIVE_CHART = 'SET_ACTIVE_CHART';
export const SET_ACTIVE_VALUE = 'SET_ACTIVE_VALUE';

export const setActiveChart = (type: Tabs) => ({
  type: SET_ACTIVE_CHART,
  payload: { activeChart: type }
})

export const setActiveValue = (value: number | null ) => ({
  type: SET_ACTIVE_VALUE,
  payload: { activeValue: value }
})