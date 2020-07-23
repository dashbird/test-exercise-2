import React from 'react';
import { formatDistance } from 'date-fns';

import '../css/info-card.scss';

export interface IInfoCardProps {
  info: string;
  description: string;
  time?: Date;
}

const InfoCard: React.FC<IInfoCardProps> = (props) => {
  return (
    <div className="info-card">
      {props.children}
      <div className="content">
        <div className="info">
          {props.info}
          { props.time && <span>{formatDistance(Date.now(), props.time)} ago</span>}
        </div>
        <span className="description">{props.description}</span>
      </div>
    </div>
  );
}

export default InfoCard;
