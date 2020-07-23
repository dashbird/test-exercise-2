import React from 'react';
import InfoCard, { IInfoCardProps } from './info-card';
import { useSelector } from 'react-redux';
import { IState } from '../reducers/root-reducer';

import '../css/information.scss';
import { BulbOutlined, WarningOutlined, CloudSyncOutlined } from '@ant-design/icons';

export interface IInformation {
  [key: string]: IInfoCardProps[],
}

const Information: React.FC = (props) => {
  const information: IInformation = useSelector((state: IState) => state.information);
  console.log(information);

  return (
    <div className="information">
      <div className="info-column">
        <div className="information-column-heading">
          Resources
        </div>
        {information.resources.map((resource) => (
          <InfoCard info={resource.info} description={resource.description} time={resource.time}>
            <CloudSyncOutlined />
          </InfoCard>
        ))}
      </div>
      <div className="info-column">
        <div className="information-column-heading">
          Insights
        </div>
        {information.insights.map((insight) => (
          <InfoCard info={insight.info} description={insight.description} time={insight.time}>
            <BulbOutlined />
          </InfoCard>
        ))}
      </div>
      <div className="info-column">
        <div className="information-column-heading">
          Alerts
        </div>
        {information.alerts.map((alert) => (
          <InfoCard info={alert.info} description={alert.description} time={alert.time}>
            <WarningOutlined />
          </InfoCard>
        ))}
      </div>
    </div>
  );
}

export default Information;
