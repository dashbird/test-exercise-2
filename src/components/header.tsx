import React from 'react';
import { ClockCircleOutlined, CloudServerOutlined, HddOutlined, FileExcelOutlined } from '@ant-design/icons'
import '../css/header.scss';
import Tab from './tab';
import { useSelector } from 'react-redux';
import { IState } from '../reducers/root-reducer';

// TODO: component naming
// TODO: Naming 
export enum Tabs {
  AVG_RESPONSE_DELAY = 'AVG. RESPONSE DELAY',
  LAST_QUEUE_SIZE = 'LAST QUEUE SIZE',
  AVG_PAYLOAD_SIZE = 'AVG. PAYLOAD SIZE',
  DEAD_LETTER_QUEUE = 'DEAD LETTER QUEUE',
}

const Header: React.FC<any> = (props) => {
  const average = useSelector((state: IState) => state.average);
  return (
    <div className="header">
      <Tab title={Tabs.AVG_RESPONSE_DELAY} activeValue={props.activeValue} extension="ms" value={average[Tabs.AVG_RESPONSE_DELAY]}>
        <ClockCircleOutlined />
      </Tab>
      <Tab title={Tabs.LAST_QUEUE_SIZE} activeValue={props.activeValue} value={average[Tabs.LAST_QUEUE_SIZE]}>
        <CloudServerOutlined />
      </Tab>
      <Tab title={Tabs.AVG_PAYLOAD_SIZE} activeValue={props.activeValue} extension="kb" value={average[Tabs.AVG_PAYLOAD_SIZE]}>
        <HddOutlined />
      </Tab>
      <Tab title={Tabs.DEAD_LETTER_QUEUE} activeValue={props.activeValue} value={average[Tabs.DEAD_LETTER_QUEUE]}>
        <FileExcelOutlined />
      </Tab>
    </div>
  );
}

export default Header;
