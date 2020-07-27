import { addDays, format, addHours, addMinutes, startOfDay, intervalToDuration } from 'date-fns';
import { TabEnum } from './components/tabs';

export function randomValueGenerator(min: number, max: number, precision: number) {
  return Math.floor(Math.random() * (max * precision - min * precision) + min * precision) / (1*precision);
}

function generateStartDate(timeframe: string) {
  let startDates: string[] = [];
  if (timeframe === 'Last 24 hours') {
    const startDate = addDays(new Date(), -1);
    for (let index = 0; index < 24; index++) {
      startDates.push(format(addHours(startDate, index), 'HH:mm'))
    }
  } else if (timeframe === 'Last 30 minutes') {
    const startDate = addMinutes(new Date(), -30);
    for (let index = 0; index < 30; index++) {
      startDates.push(format(addMinutes(startDate, index), 'HH:mm'))
    }
  } else if (timeframe === 'Last 15 minutes') {
    const startDate = addMinutes(new Date(), -30);
    for (let index = 0; index < 15; index++) {
      startDates.push(format(addMinutes(startDate, index), 'HH:mm'))
    }
  } else if (timeframe === 'Last 30 days') {
    const startDate = addDays(new Date(), -30);
    for (let index = 0; index < 30; index++) {
      startDates.push(format(addDays(startDate, index), 'HH:mm'))
    }
  } else if (timeframe === 'Last 1 hour') {
    const startDate = addMinutes(new Date(), -60);
    for (let index = 0; index < 30; index++) {
      startDates.push(format(addMinutes(startDate, index), 'HH:mm'))
    }
  } else if (timeframe === 'Last 7 days') {
    const startDate = addDays(new Date(), -7);
    for (let index = 0; index < 28; index++) {
      startDates.push(format(addHours(startDate, index * 4), 'HH:mm'))
    }
  } else if (timeframe === 'Today') {
    const startDate = startOfDay(new Date());
    const interval = intervalToDuration({
      start: startDate,
      end: new Date()
    })
    if (interval.hours && interval.hours <= 12) {
      for (let index = 0; index < 24; index++) {
        startDates.push(format(addMinutes(startDate, index * 30), 'HH:mm'))
      }
    } else {
      for (let index = 0; index < 24; index++) {
        startDates.push(format(addHours(startDate, index), 'HH:mm'))
      }
    }
  }

  return startDates;
}

export function generateNames(data: any, timeframe: string) {
  const newData = [];
  const chartNames = generateStartDate(timeframe);
  for (let index = 0; index < data.length; index++) {
    if (!chartNames[index]) {
      break;
    }
    newData.push({
      ...data[index],
      name: chartNames[index]
    })
  }
  console.log(newData)
  return newData;
}

export function convertData(players: any) {
  const avgRD = [];
  const lastQS = [];
  const avgPS = [];
  const deadLQ = [];

  for (let index = 0; index < players.length; index++) {
    const prevPlayer = players[index - 1] ? players[index - 1] : players[players.length - 1];
    const player = players[index];

    avgRD.push({
      y: Math.floor(player.pts * 10),
      x: Math.floor(player.pts * 10) - Math.floor(prevPlayer.pts * 10),
    })

    lastQS.push({
      y: Math.floor(player.ast * 10),
      x: Math.floor(player.ast * 10) - Math.floor(prevPlayer.ast * 10),
    })

    avgPS.push({
      y: player.fga,
      x: player.fga - prevPlayer.fga,
    })

    deadLQ.push({
      y: Math.floor(player.dreb),
      x: Math.floor(player.dreb) - Math.floor(prevPlayer.dreb),
    })
  }

  return {
    'AVG. RESPONSE DELAY': avgRD,
    'LAST QUEUE SIZE': lastQS,
    'AVG. PAYLOAD SIZE': avgPS,
    'DEAD LETTER QUEUE': deadLQ,
  }
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