import { addHours } from 'date-fns/esm';
import { format } from 'date-fns';

// TODO: typings (what is returned)
export function dataGenerator(startDate: Date, range: { start: number, end: number, precision: number }) {
  const completeData: any[] = [];
  for (let index = 0; index < 150; index++) {
    completeData.push({
      name: format(addHours(startDate, index * 2), 'HH:mm'),
      y: randomValueGenerator(range.start, range.end, range.precision),
      x: randomValueGenerator(Math.abs(range.end / 10) * -1, range.end / 10, range.precision),
    });
  }
  return completeData;
}

function randomValueGenerator(min: number, max: number, precision: number) {
  return Math.floor(Math.random() * (max * precision - min * precision) + min * precision) / (1*precision);
}