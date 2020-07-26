import React, { useEffect } from 'react';
import '../css/app.scss';
import Chart from './chart';
import Information from './information';
import { useDispatch } from 'react-redux';
import { fetchData } from '../actions/data-fetching-actions';
import { startOfHour } from 'date-fns';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData('ALL', startOfHour(new Date())));
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

// TODO: clean up package.json