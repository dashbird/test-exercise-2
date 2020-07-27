import React from 'react';
import { ClockCircleOutlined, CloudServerOutlined, HddOutlined, FileExcelOutlined } from '@ant-design/icons'
import '../css/header.scss';
import Tab from './tab';
import { useSelector } from 'react-redux';
import { IState } from '../reducers/root-reducer';

export enum TabEnum {
  AVG_RESPONSE_DELAY = 'AVG. RESPONSE DELAY',
  LAST_QUEUE_SIZE = 'LAST QUEUE SIZE',
  AVG_PAYLOAD_SIZE = 'AVG. PAYLOAD SIZE',
  DEAD_LETTER_QUEUE = 'DEAD LETTER QUEUE',
}

const Tabs: React.FC<any> = (props) => {
  const average = useSelector((state: IState) => state.average);
  return (
    <div className="header">
      <Tab title={TabEnum.AVG_RESPONSE_DELAY} activeValue={props.activeValue} extension="ms" value={average[TabEnum.AVG_RESPONSE_DELAY]}>
        <ClockCircleOutlined />
      </Tab>
      <Tab title={TabEnum.LAST_QUEUE_SIZE} activeValue={props.activeValue} value={average[TabEnum.LAST_QUEUE_SIZE]}>
        <CloudServerOutlined />
      </Tab>
      <Tab title={TabEnum.AVG_PAYLOAD_SIZE} activeValue={props.activeValue} extension="kb" value={average[TabEnum.AVG_PAYLOAD_SIZE]}>
        <HddOutlined />
      </Tab>
      <Tab title={TabEnum.DEAD_LETTER_QUEUE} activeValue={props.activeValue} value={average[TabEnum.DEAD_LETTER_QUEUE]}>
        <FileExcelOutlined />
      </Tab>
    </div>
  );
}

export default Tabs;
