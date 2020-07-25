import React from 'react';
import { ClockCircleOutlined, CloudServerOutlined, HddOutlined, FileExcelOutlined } from '@ant-design/icons'
import '../css/header.scss';
import Tab from './tab';

// TODO: Naming
export enum Tabs {
  AVG_RESPONSE_DELAY = 'AVG. RESPONSE DELAY',
  LAST_QUEUE_SIZE = 'LAST QUEUE SIZE',
  AVG_PAYLOAD_SIZE = 'AVG. PAYLOAD SIZE',
  DEAD_LETTER_QUEUE = 'DEAD LETTER QUEUE',
}

const Header: React.FC = () => {
  // TODO: pass down data?
  return (
    <div className="header">
      <Tab title={Tabs.AVG_RESPONSE_DELAY} value="23ms">
        <ClockCircleOutlined />
      </Tab>
      <Tab title={Tabs.LAST_QUEUE_SIZE} value="32">
        <CloudServerOutlined />
      </Tab>
      <Tab title={Tabs.AVG_PAYLOAD_SIZE} value="1.35kb">
        <HddOutlined />
      </Tab>
      <Tab title={Tabs.DEAD_LETTER_QUEUE} value="0">
        <FileExcelOutlined />
      </Tab>
    </div>
  );
}

export default Header;
