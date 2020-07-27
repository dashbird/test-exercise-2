import React, { useState } from 'react';
import { Select, Button } from 'antd';
import '../css/time-picker.scss';
import { useDispatch } from 'react-redux';
import { setTimeframe } from '../actions/chart-settings-actions';

const { Option } = Select;

interface ITimePickerProps {
  closeDatePicker: any,
}
// TODO: check over ; 
const TimePicker: React.FC<ITimePickerProps> = (props) => {
  const dispatch = useDispatch();

  const setFrame = (frame: string) => {
    dispatch(setTimeframe(frame));
    props.closeDatePicker();
  }

  const [customSelectNumber, setCustomSelectNumber] = useState(5);
  const [customSelectTimeframe, setCustomSelectTimeframe] = useState('hours');

  const setCustomTimeframe = () => {
    setFrame(`Last ${customSelectNumber} ${customSelectTimeframe}`)
    props.closeDatePicker();
  }
  // TODO: time picker selections as enums
  return (
    <div className="time-picker">
      <h4>QUICK SELECT</h4>
      <div className="select">
        LAST
        <Select defaultValue={customSelectNumber} bordered={false} onChange={(value) => setCustomSelectNumber(value)}>
          <Option value="5">5</Option>
          <Option value="10">10</Option>
          <Option value="15">15</Option>
        </Select>
        <Select defaultValue={customSelectTimeframe} bordered={false} onChange={(value) => setCustomSelectTimeframe(value)}>
          <Option value="minutes">Minutes</Option>
          <Option value="hours">Hours</Option>
          <Option value="days">Days</Option>
          <Option value="months">Months</Option>
        </Select>
        <Button size={'middle'} onClick={setCustomTimeframe}>
          Apply
        </Button>
      </div>

      <h4>COMMONLY USED</h4>
      <div className="common">
        <Button type="text" size={'small'} onClick={() => setFrame('Today')}>
          TODAY
        </Button>
        <Button type="text" size={'small'} onClick={() => setFrame('Last 15 minutes')}>
          LAST 15 MINUTES
        </Button>
        <Button type="text" size={'small'} onClick={() => setFrame('Last 30 minutes')}>
          LAST 30 MINUTES
        </Button>
        <Button type="text" size={'small'} onClick={() => setFrame('Last 1 hour')}>
          LAST 1 HOUR
        </Button>
        <Button type="text" size={'small'} onClick={() => setFrame('Last 24 hours')}>
          LAST 24 HOURS
        </Button>
        <Button type="text" size={'small'} onClick={() => setFrame('Last 7 days')}>
          LAST 7 DAYS
        </Button>
        <Button type="text" size={'small'} onClick={() => setFrame('Last 30 days')}>
          LAST 30 DAYS
        </Button>
      </div>
      <h4>RECENTLY USED</h4>
      <div className="recent">
        <Button type="text" size={'small'} onClick={() => setFrame('Today')}>
          TODAY
        </Button>
        <Button type="text" size={'small'} onClick={() => setFrame('Last 7 days')}>
          LAST 7 DAYS
        </Button>
        <Button type="text" size={'small'} onClick={() => setFrame('Last 15 minutes')}>
          LAST 15 MINUTES
        </Button>
      </div>
    </div>
  );
}

export default TimePicker;
