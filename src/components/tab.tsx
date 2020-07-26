import React from 'react';
import '../css/tab.scss';
import { Tabs } from './header';
import { useSelector, useDispatch } from 'react-redux';
import { IState } from '../reducers/root-reducer';
import { setActiveChart } from '../actions/chart-settings-actions';
import { ResponsiveContainer, Line, LineChart } from 'recharts';

interface ITabProps {
  title: Tabs;
  value: string;
  activeValue?: string
  extension?: string
}

const Tab: React.FC<ITabProps> = (props) => {
  const isActive = useSelector((state: IState) => state.activeChart === props.title);

  // maybe pass it down using props
  const data = useSelector((state: IState) => state.data[props.title]);
  const className = isActive ? 'tab active' : 'tab';
  const dispatch = useDispatch()

  return (
    <div className={className} onClick={() => dispatch(setActiveChart(props.title))}>
      <div className="title">{props.title}</div>
      {props.children}
      {isActive && props.activeValue ?
        <div className="value">{props.activeValue}{props.extension}</div> :
        <div className="value">{props.value}</div>
      }
      <div className="tab-chart">
        <ResponsiveContainer>
          <LineChart data={data}>
            <Line type="monotone" dataKey="y" stroke="#dcdcdc" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Tab;
