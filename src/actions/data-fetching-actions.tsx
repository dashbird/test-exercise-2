import { dataAvg, dataGenerator } from '../helpers';

export const SET_DATA = 'SET_DATA';

export const setData = (data: any, avgData: any) => ({
  type: SET_DATA,
  payload: { data, avgData }
})


export function fetchData(startDate: Date) {
  console.log('Fetching data');
  return (dispatch: any) => {
    // Used hardcoded mock data because couldn't find a good API endpoint to fetch this kind of data.
    const data = {
      'AVG. RESPONSE DELAY': dataGenerator(startDate, { start: 30, end: 450, precision: 1 }),
      'LAST QUEUE SIZE': dataGenerator(startDate, { start: 0, end: 2000, precision: 1 }),
      'AVG. PAYLOAD SIZE': dataGenerator(startDate, { start: 0, end: 10, precision: 100 }),
      'DEAD LETTER QUEUE': dataGenerator(startDate, { start: 0, end: 20, precision: 1 }),
    }

    dispatch(setData(data, dataAvg(data)));
  };
}
