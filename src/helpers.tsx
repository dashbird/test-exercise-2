import { addHours } from 'date-fns/esm';
import { format } from 'date-fns';

interface fakeData {
  x: string | Date;
  y: number;
}
export function dataGenerator(startDate: Date) {
  const completeData: any[] = [];
  for (let index = 0; index < 60; index++) {
    completeData.push({
      name: format(addHours(startDate, index * 2), 'HH:mm'),
      y: randomValueGenerator(0, 8000),
      x: randomValueGenerator(-400, 700),
    });
  }

  return completeData;
}

function randomValueGenerator(min: number, max: number) {
  return Math.floor((Math.random() * max) + min);
}