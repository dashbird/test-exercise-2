// TODO: write reducer tests

import rootReducer, { INITIAL_STATE } from '../reducers/root-reducer'

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(rootReducer(undefined, {})).toEqual(INITIAL_STATE)
  })

  it('should handle SET_NEXT_WEEK', () => {
    
  })
})