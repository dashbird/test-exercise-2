import { addDays, format, addHours, addMinutes, startOfDay, intervalToDuration } from 'date-fns';
import { TabEnum } from './components/tabs';
import { Timeframes } from './components/time-picker';

export function randomValueGenerator(min: number, max: number, precision: number) {
  return Math.floor(Math.random() * (max * precision - min * precision) + min * precision) / (1 * precision);
}

function generateStartDates(timeframe: Timeframes) {
  let startDates: string[] = [];
  let startDate: Date;
  switch (timeframe) {
    case Timeframes.LAST_24_HOURS:
      startDate = addDays(new Date(), -1);
      for (let index = 0; index < 24; index++) {
        startDates.push(format(addHours(startDate, index), 'HH:mm'))
      }
      break;
    case Timeframes.LAST_30_MINUTES:
      startDate = addMinutes(new Date(), -30);
      for (let index = 0; index < 30; index++) {
        startDates.push(format(addMinutes(startDate, index), 'HH:mm'))
      }
      break;
    case Timeframes.LAST_15_MINUTES:
      startDate = addMinutes(new Date(), -30);
      for (let index = 0; index < 15; index++) {
        startDates.push(format(addMinutes(startDate, index), 'HH:mm'))
      }
      break;
    case Timeframes.LAST_30_DAYS:
      startDate = addDays(new Date(), -30);
      for (let index = 0; index < 30; index++) {
        startDates.push(format(addDays(startDate, index), 'HH:mm'))
      }
      break;
    case Timeframes.LAST_1_HOUR:
      startDate = addMinutes(new Date(), -60);
      for (let index = 0; index < 60; index++) {
        startDates.push(format(addMinutes(startDate, index), 'HH:mm'))
      }
      break;
    case Timeframes.LAST_7_DAYS:
      startDate = addDays(new Date(), -7);
      for (let index = 0; index < 28; index++) {
        startDates.push(format(addHours(startDate, index * 4), 'HH:mm'))
      }
      break;

    case Timeframes.TODAY:
      startDate = startOfDay(new Date());
      const interval = intervalToDuration({
        start: startDate,
        end: new Date()
      })
      let hours = interval.hours || 24;
      if (interval.hours && interval.hours <= 12) {
        for (let index = 0; index < hours * 2; index++) {
          startDates.push(format(addMinutes(startDate, index * 30), 'HH:mm'))
        }
      } else {
        for (let index = 0; index < hours; index++) {
          startDates.push(format(addHours(startDate, index), 'HH:mm'))
        }
      }
      break;
    default:
      break;
  }

  return startDates;
}

export function generateNames(data: any, timeframe: Timeframes) {
  const newData = [];
  const chartNames = generateStartDates(timeframe);
  for (let index = 0; index < data.length; index++) {
    if (!chartNames[index]) {
      break;
    }
    newData.push({
      ...data[index],
      name: chartNames[index]
    })
  }
  return newData;
}

// Calculate averges for each dataset
export function dataAvg(data: any) {
  const avgData: any = {};
  for (const key of Object.keys(data)) {
    const sum = data[key].reduce((a: any, b: any) => ({ y: a.y + b.y }));
    const avg = (sum.y / data[key].length);
    avgData[key] = Math.floor(avg);
    if (key === TabEnum.AVG_PAYLOAD_SIZE) {
      avgData[key] = Math.floor(avg * 100) / 100;
    }
  }

  return avgData;
}


export function median(values: any) {
  if (values.length === 0) return 0;

  values.sort(function (a: any, b: any) {
    return a.y - b.y;
  });

  var half = Math.floor(values.length / 1.1);
  if (values.length % 2) return values[half].y;

  return (values[half - 1].y + values[half].y) / 2.0;
}

export const gradientOffset = (data: any) => {
  const medianValue = median([...data]);
  const dataMax = Math.max(...data.map((i: any) => i.y));
  const dataMin = Math.min(...data.map((i: any) => i.y)) - medianValue;

  if (dataMax <= 0) {
    return 0
  }
  else if (dataMin >= 0) {
    return 1
  }
  else {
    return dataMax / (dataMax - dataMin);
  }
}

export function dataGenerator(startDate: Date, range: { start: number, end: number, precision: number }) {
  const completeData: any[] = [];
  for (let index = 0; index < 90; index++) {
    completeData.push({
      name: format(addHours(startDate, index * 2), 'HH:mm'),
      y: randomValueGenerator(range.start, range.end, range.precision),
      x: randomValueGenerator(Math.abs(range.end / 2) * -1, range.end / 2, range.precision),
    });
  }
  return completeData;
}