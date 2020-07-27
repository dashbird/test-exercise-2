import React, { useEffect } from 'react';
import '../css/app.scss';
import Chart from './chart';
import Information from './information';
import { useDispatch } from 'react-redux';
import { fetchData } from '../actions/data-fetching-actions';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }); // Do initial fetch on component mount

  return (
    <div className="app">
      <div className="heading">
        alerting-check-policy-conditions
      </div>
      <Chart />
      <Information />
    </div>
  );
}

export default App;
