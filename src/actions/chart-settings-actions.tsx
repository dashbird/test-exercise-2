export const SET_CHART = 'SET_CHART';

export const setActiveChart = (type: string) => ({
  type: SET_CHART,
  payload: { activeChart: type }
})