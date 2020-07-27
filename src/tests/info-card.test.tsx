import React from 'react';
import { render } from '@testing-library/react';
import InfoCard, { IInfoCardProps } from '../components/info-card';

const props: IInfoCardProps = {
  info: 'New stuff',
  description: 'Old stuff',
}

test('renders <DayHolidays />', () => {
  const { getByText } = render(<InfoCard info={props.info} description={props.description} time={new Date()}/>);
  const jaanipaev = getByText('New stuff');
  expect(jaanipaev).toBeInTheDocument();
  expect(jaanipaev).toHaveClass('info');

  const madlipaev = getByText('Old stuff');
  expect(madlipaev).toBeInTheDocument();
  expect(madlipaev).toHaveClass('description');
});
