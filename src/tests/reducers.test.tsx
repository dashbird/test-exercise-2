// TODO: write reducer tests

import rootReducer, { INITIAL_STATE } from '../reducers/root-reducer'
import { SET_ACTIVE_CHART } from '../actions/chart-settings-actions'
import { TabEnum } from '../components/tabs'

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(rootReducer(undefined, {})).toEqual(INITIAL_STATE)
  })

  it('should handle SET_TIMEFRAME', () => {
    const activeChart = TabEnum.LAST_QUEUE_SIZE;
    expect(
      rootReducer(INITIAL_STATE, {
        type: SET_ACTIVE_CHART,
        payload: {
          activeChart,
        }
      })
    ).toEqual({
      ...INITIAL_STATE,
      activeChart,
    })
  })
})