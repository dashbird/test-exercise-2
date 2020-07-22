import React from 'react';
import '../css/tab.scss';
import { Tabs } from './header';
import { useSelector, useDispatch } from 'react-redux';
import { IState } from '../reducers/root-reducer';
import { setActiveChart } from '../actions/chart-settings-actions';

interface ITabProps {
  title: Tabs;
  value: string;
  class: string;
}

const Tab: React.FC<ITabProps> = (props) => {
  const isActive = useSelector((state: IState) => state.activeChart === props.title);
  const className = isActive ? 'tab active' : 'tab';
  const dispatch = useDispatch()

  return (
    <div className={className} onClick={() => dispatch(setActiveChart(props.title))}>
      <div className="title">{props.title}</div>
      {props.children}
      <div className="value">{props.value}</div>
      <div className="tab-chart"></div>
    </div>
  );
}

export default Tab;
