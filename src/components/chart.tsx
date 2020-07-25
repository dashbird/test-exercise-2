import React from 'react';
import '../css/chart.scss';
import {
  ComposedChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell,
} from 'recharts';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveValue } from '../actions/chart-settings-actions';
import { IState } from '../reducers/root-reducer';


const gradientOffset = (data: any) => {
  const dataMax = Math.max(...data.map((i: any) => i.y));
  const dataMin = Math.min(...data.map((i: any) => i.y)) - 7000;

  if (dataMax <= 0) {
    return 0
  }
  else if (dataMin >= 0) {
    return 1
  }
  else {
    return dataMax / (dataMax - dataMin);
  }
}

const Chart: React.FC = () => {
  const data = useSelector((state: IState) => state.activeData);
  let off;
  if (data) {
    off = gradientOffset(data);
  }
  const dispatch = useDispatch();

  // TODO: rename funcs
  /**
   * Event handler for onNearestX.
   * @param {Object} value Selected value.
   * @param {index} index Index of the value in the data array.
   * @private
   */
  const _onNearestX = (value: any) => {
    if (value && value.activePayload) {
      dispatch(setActiveValue(value.activePayload[0].payload.y))
    }
  };

  const _onNearestY = () => {
    dispatch(setActiveValue(null))
  };
  return (
    <div className="chart">
      {data && <ResponsiveContainer>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
          onMouseOver={_onNearestX}
          onMouseLeave={_onNearestY}
        >
          <CartesianGrid stroke="#f5f5f5" horizontal={false} vertical={false} />
          <XAxis dataKey="name" tickSize={20} />
          <YAxis minTickGap={1000} interval={0} domain={[-400, 'dataMax']} orientation="left" stroke="#8884d8" />
          <Tooltip />
          <defs>
            {/* TODO: linear gradient red and blue */}
            <linearGradient id="colorPx" x1="0" y1="0" x2="0" y2="1">
              <stop offset={off} stopColor="#8884d8" stopOpacity={1} />
              <stop offset={off} stopColor="#6F6F6F" stopOpacity={1} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset={off} stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset={off} stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area strokeWidth="2" type="monotone" dataKey="y" fill='url(#colorPv)' stroke="url(#colorPx)" />
          <Bar dataKey="x" barSize={5} fill="#413ea0" >
            {
              data.map((entry: any, index: any) => (
                // TODO: correct colours
                <Cell key={`cell-${index}`} fill={entry.x > 0 ? "#2ca02c" : "#d62728"} />
              ))
            }
          </Bar>
          {/* <Line type="monotone" dataKey="y" stroke="#ff7300" /> */}
        </ComposedChart>
      </ResponsiveContainer>}
    </div>
  );
}

export default Chart;
