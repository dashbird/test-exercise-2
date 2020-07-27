import React from 'react';
import InfoCard, { IInfoCardProps } from './info-card';
import { useSelector } from 'react-redux';
import { IState } from '../reducers/root-reducer';

import { BulbOutlined, WarningOutlined, CloudSyncOutlined } from '@ant-design/icons';
import { Select } from 'antd';

import '../css/information.scss';
const { Option } = Select;

export interface IInformation {
  [key: string]: IInfoCardProps[],
}

const Information: React.FC = () => {
  const information: IInformation = useSelector((state: IState) => state.information);

  return (
    <div className="information">
      <div className="info-column">
        <div className="information-column-heading">
          Resources
          <Select defaultValue="execution-time" size="small" style={{ fontSize: '12px', lineHeight: '24px', color: '#9a9a9a', letterSpacing: '-0.3px', textTransform: 'capitalize' }} bordered={false}>
            <Option value="execution-time" style={{ fontSize: '12px', lineHeight: '24px', color: '#9a9a9a', letterSpacing: '-0.3px', backgroundColor: '#f5f5f5' }}>Execution Time</Option>
            <Option value="type" style={{ fontSize: '12px', lineHeight: '24px', color: '#9a9a9a', letterSpacing: '-0.3px', backgroundColor: '#f5f5f5' }}>Type</Option>
            <Option value="alphabetic" style={{ fontSize: '12px', lineHeight: '24px', color: '#9a9a9a', letterSpacing: '-0.3px', backgroundColor: '#f5f5f5' }}>Alphabetic</Option>
          </Select>
        </div>
        {information.resources.map((resource) => (
          <InfoCard info={resource.info} description={resource.description} time={resource.time} key={resource.info}>
            <CloudSyncOutlined />
          </InfoCard>
        ))}
      </div>
      <div className="info-column">
        <div className="information-column-heading">
          Insights
          <Select defaultValue="latest" size="small" style={{ fontSize: '12px', lineHeight: '24px', color: '#9a9a9a', letterSpacing: '-0.3px', textTransform: 'capitalize' }} bordered={false}>
            <Option value="latest" style={{ fontSize: '12px', lineHeight: '24px', color: '#9a9a9a', letterSpacing: '-0.3px', backgroundColor: '#f5f5f5' }}>Latest</Option>
            <Option value="earliest" style={{ fontSize: '12px', lineHeight: '24px', color: '#9a9a9a', letterSpacing: '-0.3px', backgroundColor: '#f5f5f5' }}>Earliest</Option>
          </Select>
        </div>
        {information.insights.map((insight) => (
          <InfoCard info={insight.info} description={insight.description} time={insight.time} key={insight.info}>
            <BulbOutlined />
          </InfoCard>
        ))}
      </div>
      <div className="info-column">
        <div className="information-column-heading">
          Alerts
          <Select defaultValue="latest" size="small" style={{ fontSize: '12px', lineHeight: '24px', color: '#9a9a9a', letterSpacing: '-0.3px', textTransform: 'capitalize' }} bordered={false}>
            <Option value="latest" style={{ fontSize: '12px', lineHeight: '24px', color: '#9a9a9a', letterSpacing: '-0.3px', backgroundColor: '#f5f5f5' }}>Latest</Option>
            <Option value="earliest" style={{ fontSize: '12px', lineHeight: '24px', color: '#9a9a9a', letterSpacing: '-0.3px', backgroundColor: '#f5f5f5' }}>Earliest</Option>
          </Select>
        </div>
        {information.alerts.map((alert) => (
          <InfoCard info={alert.info} description={alert.description} time={alert.time} key={alert.info}>
            <WarningOutlined />
          </InfoCard>
        ))}
      </div>
    </div>
  );
}

export default Information;
