import React from 'react';
import { Button } from 'antd';
import '../css/time-picker.scss';
import { useDispatch } from 'react-redux';
import { setTimeframe } from '../actions/chart-settings-actions';

interface ITimePickerProps {
  closeDatePicker: any,
}

export enum Timeframes {
  TODAY = 'TODAY',
  LAST_15_MINUTES = 'LAST 15 MINUTES',
  LAST_30_MINUTES = 'LAST 30 MINUTES',
  LAST_1_HOUR = 'LAST 1 HOUR',
  LAST_24_HOURS = 'LAST 24 HOURS',
  LAST_7_DAYS = 'LAST 7 DAYS',
  LAST_30_DAYS = 'LAST 30 DAYS'
}

const TimePicker: React.FC<ITimePickerProps> = (props) => {
  const dispatch = useDispatch();

  const setFrame = (frame: Timeframes) => {
    dispatch(setTimeframe(frame));
    props.closeDatePicker();
  }

  return (
    <div className="time-picker">
      <h4>COMMONLY USED</h4>
      <div className="common">
        <Button type="text" size={'small'} onClick={() => setFrame(Timeframes.TODAY)}>
          {Timeframes.TODAY}
        </Button>
        <Button type="text" size={'small'} onClick={() => setFrame(Timeframes.LAST_15_MINUTES)}>
          {Timeframes.LAST_15_MINUTES}
        </Button>
        <Button type="text" size={'small'} onClick={() => setFrame(Timeframes.LAST_30_MINUTES)}>
          {Timeframes.LAST_30_MINUTES}
        </Button>
        <Button type="text" size={'small'} onClick={() => setFrame(Timeframes.LAST_1_HOUR)}>
          {Timeframes.LAST_1_HOUR}
        </Button>
        <Button type="text" size={'small'} onClick={() => setFrame(Timeframes.LAST_24_HOURS)}>
          {Timeframes.LAST_24_HOURS}
        </Button>
        <Button type="text" size={'small'} onClick={() => setFrame(Timeframes.LAST_7_DAYS)}>
          {Timeframes.LAST_7_DAYS}
        </Button>
        <Button type="text" size={'small'} onClick={() => setFrame(Timeframes.LAST_30_DAYS)}>
          {Timeframes.LAST_30_DAYS}
        </Button>
      </div>
      <h4>RECENTLY USED</h4>
      <div className="recent">
        <Button type="text" size={'small'} onClick={() => setFrame(Timeframes.TODAY)}>
          {Timeframes.TODAY}
        </Button>
        <Button type="text" size={'small'} onClick={() => setFrame(Timeframes.LAST_7_DAYS)}>
          {Timeframes.LAST_7_DAYS}
        </Button>
        <Button type="text" size={'small'} onClick={() => setFrame(Timeframes.LAST_15_MINUTES)}>
          {Timeframes.LAST_15_MINUTES}
        </Button>
      </div>
    </div>
  );
}

export default TimePicker;
