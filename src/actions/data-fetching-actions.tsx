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
    // TODO: set data avg
    const data = {
      'AVG. RESPONSE DELAY': dataGenerator(startDate, { start: 30, end: 450, precision: 1}),
      'LAST QUEUE SIZE': dataGenerator(startDate, { start: 0, end: 8000, precision: 1}),
      'AVG. PAYLOAD SIZE': dataGenerator(startDate, { start: 0, end: 10, precision: 100}),
      'DEAD LETTER QUEUE': dataGenerator(startDate, { start: 0, end: 20, precision: 1}),
    }

    // dispatch(setData(data));


    // TODO: FETCH API
    console.log(`${process.env.REACT_APP_API_URL}?start_at=2018-01-01&end_at=2018-09-01`)
    return fetch('http://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-09-01', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json'
      },
    })
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        console.log(json);
            dispatch(setData(json.data));

        // return json.holidays;
      })
      // .catch(error => dispatch(fetchHolidaysFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response: any) {
  console.log(response);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}