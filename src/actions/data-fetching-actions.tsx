import { Tabs } from '../components/header';
import { dataGenerator } from '../helpers';

export const SET_DATA = 'SET_DATA';

export const setData = (data: any) => ({
  type: SET_DATA,
  payload: { data }
})


export function fetchData(type: Tabs | 'ALL', startDate: Date) {
  console.log('Fetching data');
  return (dispatch: any) => {
    // TODO: fetch data from API
    const data = {
      'AVG. RESPONSE DELAY': dataGenerator(startDate),
      'LAST QUEUE SIZE': dataGenerator(startDate),
      'AVG. PAYLOAD SIZE': dataGenerator(startDate),
      'DEAD LETTER QUEUE': dataGenerator(startDate),
    }
    dispatch(setData(data));
  };
}