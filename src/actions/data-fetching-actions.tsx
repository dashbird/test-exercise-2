import { dataAvg, convertData } from '../helpers';

export const SET_DATA = 'SET_DATA';

export const setData = (data: any, avgData: any) => ({
  type: SET_DATA,
  payload: { data, avgData }
})


// I fetched some NBA player stats for mock data
// Converted data to be more in align with the needed data
export function fetchData() {
  console.log('Fetching data');
  return (dispatch: any) => {
    let ids = [];
    for (let index = 0; index < 100; index++) {
      ids.push(index);
    }
    return fetch(`${process.env.REACT_APP_API_URL}${ids.join(',')}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        const convertedData = convertData(json.data);
        dispatch(setData(convertedData, dataAvg(convertedData)));
        return json.data;
      })
      .catch(error => console.error('Somethings is really wrong - ', error));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response: any) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}