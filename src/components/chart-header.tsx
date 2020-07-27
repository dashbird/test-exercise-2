import React, { useState } from 'react';
import { CalendarOutlined, DownOutlined, BulbOutlined, WarningOutlined, CodeOutlined } from '@ant-design/icons'
import TimePicker from './time-picker';
import '../css/chart-header.scss';
import { useSelector } from 'react-redux';
import { IState } from '../reducers/root-reducer';
import {
  Area, AreaChart, ResponsiveContainer,
} from 'recharts';

const ChartHeader: React.FC = () => {
  const [showDatePicker, setDatePicker] = useState(false);
  const data = useSelector((state: IState) => state.activeData);
  const timeframe = useSelector((state: IState) => state.timeframe);

  return (
    <div className="chart-header">
      <div className="info">
        <span className="pending">Pending increased</span>
        <span className="pending">Pending resolved</span>
        <span className="extra"><WarningOutlined /> Alerts</span>
        <span className="extra"><BulbOutlined /> Insights</span>
        <span className="extra"><CodeOutlined /> Config. change</span>
      </div>
      <div className="selection">
        {timeframe}
        <div className="date-picker" onClick={() => setDatePicker(true)}>
          <CalendarOutlined style={{ fontSize: '18px', color: '#4a45c6' }} />
          <DownOutlined style={{ fontSize: '14px', color: '#4a45c6' }} />
        </div>
      </div>

      {showDatePicker && <TimePicker closeDatePicker={() => setDatePicker(false)} />}
      <div className="all-data">
        <ResponsiveContainer width="100%" height={60}>
          <AreaChart
            width={200}
            height={60}
            data={data}
            margin={{
              top: 0, right: 0, left: 0, bottom: 0,
            }}
          >
            <defs>
              {/* TODO: Calculate correct percentages */}
              <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
                <stop offset="0%" stopColor="#f5f5f5" stopOpacity={1} />
                <stop offset={`${60}%`} stopColor="#f5f5f5" stopOpacity={1} />
                <stop offset={`${65}%`} stopColor="#4a45c6" stopOpacity={0.8} />
                <stop offset={`${85}%`} stopColor="#4a45c6" stopOpacity={0.8} />
                <stop offset={`${90}%`} stopColor="#f5f5f5" stopOpacity={1} />
                <stop offset={`${100}%`} stopColor="#f5f5f5" stopOpacity={1} />
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="y" stroke="url(#colorUv)" fill="url(#colorUv)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ChartHeader;
