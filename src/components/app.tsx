import React, { useEffect } from 'react';
import '../css/app.scss';
import Header from './header';
import Chart from './chart';
import Information from './information';
import { useDispatch } from 'react-redux';
import { fetchData } from '../actions/data-fetching-actions';
import { startOfHour } from 'date-fns';

const App: React.FC = () => {
  // const data: any = dataGenerator(new Date(2020, 7, 15));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData('ALL', startOfHour(new Date())));
  }, [dispatch]); // Do initial fetch on component mount


  return (
    <div className="app">
      <div className="heading">
        alerting-check-policy-conditions
      </div>
      <Header />
      <Chart />
      <Information />
    </div>
  );
}

export default App;

// TODO: clean up package.json