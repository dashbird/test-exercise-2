import React, { useState } from 'react';
import '../css/chart.scss';
import {
  ComposedChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell,
} from 'recharts';
import { useSelector } from 'react-redux';
import { IState } from '../reducers/root-reducer';
import Tabs from './tabs';
import ChartHeader from './chart-header';
import { gradientOffset } from '../helpers';

const Chart: React.FC = () => {
  const data = useSelector((state: IState) => state.activeData);
  const [dragging, setDragging] = useState(false);
  const [activeValue, setActiveValue] = useState(undefined)

  let off;
  if (data) {
    off = gradientOffset(data);
  }

  const onMouseMove = (value: any) => {
    if (dragging && value && value.activePayload) {
      setActiveValue(value.activePayload[0].payload.y)
    }
  };

  const onMouseDown = () => {
    setDragging(true);
  }

  // TODO: format yaxis values
  // TODO: zoom chart
  const onMouseUp = () => {
    setDragging(false);
    setActiveValue(undefined);
  };
  return (
    <>
      <Tabs activeValue={activeValue}></Tabs>
      <div className={'chart ' + (dragging ? 'dragging' : '')}>
        <ChartHeader />
        {data && <ResponsiveContainer height={240}>
          <ComposedChart
            data={data}
            margin={{
              top: 20, right: 20, bottom: 20, left: 0,
            }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
          >
            <CartesianGrid stroke="#f5f5f5" horizontal={true} vertical={false} />
            <XAxis dataKey="name" tickSize={20} />
            <YAxis minTickGap={1000} interval={0} domain={['dataMin', 'dataMax']} orientation="left" stroke="#8884d8" />
            <Tooltip />
            <defs>
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
                  <Cell key={`cell-${index}`} fill={entry.x > 0 ? "#d62728" : "#8884d8"} />
                ))
              }
            </Bar>
          </ComposedChart>
        </ResponsiveContainer>}
      </div>
    </>
  );
}

export default Chart;
