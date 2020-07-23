import React from 'react';
import '../css/app.scss';
import Header from './header';
import Chart from './chart';
import Information from './information';

const App: React.FC = () => {
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