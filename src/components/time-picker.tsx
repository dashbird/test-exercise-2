import React from 'react';
import { Select, Button } from 'antd';
import '../css/time-picker.scss';

const { Option } = Select;

interface ITimePickerProps {
  closeDatePicker: any,
}

const TimePicker: React.FC<ITimePickerProps> = (props) => {
  // TODO: pass down data?
  return (
    <div className="time-picker">
      <h4>QUICK SELECT</h4>
      <div className="select">
        LAST
        <Select defaultValue="5" bordered={false}>
          <Option value="5">5</Option>
          <Option value="10">10</Option>
          <Option value="15">15</Option>
        </Select>
        <Select defaultValue="hours" bordered={false}>
          <Option value="minutes">Minutes</Option>
          <Option value="hours">Hours</Option>
          <Option value="days">Days</Option>
          <Option value="months">Months</Option>
        </Select>
        <Button size={'middle'} onClick={props.closeDatePicker}>
          Apply
        </Button>
      </div>

      <h4>COMMONLY USED</h4>
      <div className="common">
        <Button type="text" size={'small'}>
          TODAY
        </Button>
        <Button type="text" size={'small'}>
          THIS WEEK
        </Button>
        <Button type="text" size={'small'}>
          LAST 15 MINUTES
        </Button>
        <Button type="text" size={'small'}>
          LAST 30 MINUTES
        </Button>
        <Button type="text" size={'small'}>
          LAST 1 HOUR
        </Button>
        <Button type="text" size={'small'}>
          LAST 24 HOURS
        </Button>
        <Button type="text" size={'small'}>
          LAST 7 DAYS
        </Button>
        <Button type="text" size={'small'}>
          LAST 30 DAYS
        </Button>
        <Button type="text" size={'small'}>
          LAST 90 DAYS
        </Button>
        <Button type="text" size={'small'}>
          LAST 1 YEAR
        </Button>
      </div>
      <h4>RECENTLY USED</h4>
      <div className="recent">
        <Button type="text" size={'small'}>
          TODAY
        </Button>
        <Button type="text" size={'small'}>
          THIS WEEK
        </Button>
        <Button type="text" size={'small'}>
          LAST 15 MINUTES
        </Button>
      </div>
    </div>
  );
}

export default TimePicker;
