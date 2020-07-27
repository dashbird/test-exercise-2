import { SET_TIMEFRAME, setTimeframe, SET_ACTIVE_CHART, setActiveChart } from '../actions/chart-settings-actions';
import { TabEnum } from '../components/tabs';
import { Timeframes } from '../components/time-picker';

describe('actions', () => {
  it('should create an action to set timeframe', () => {
    const expectedAction = {
      type: SET_TIMEFRAME,
      payload: {
        timeframe: Timeframes.TODAY
      }
    }
    expect(setTimeframe(Timeframes.TODAY)).toEqual(expectedAction)
  })

  it('should create an action to set week start day', () => {
    const expectedAction = {
      type: SET_ACTIVE_CHART,
      payload: {
        activeChart: TabEnum.AVG_RESPONSE_DELAY
      }
    }
    expect(setActiveChart(TabEnum.AVG_RESPONSE_DELAY)).toEqual(expectedAction)
  })
})
