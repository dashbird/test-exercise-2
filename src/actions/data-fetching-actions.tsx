import { dataAvg, convertData } from '../helpers';

export const SET_DATA = 'SET_DATA';

// TODO: typings
export const setData = (data: any, avgData: any) => ({
  type: SET_DATA,
  payload: { data, avgData }
})



export function fetchData() {
  console.log('Fetching data');
  return (dispatch: any) => {
    let ids = [];
    for (let index = 0; index < 200; index++) {
      ids.push(index);
    }
    // Fetch NBA player stats as mock data.
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
        console.log('conv', convertedData);
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