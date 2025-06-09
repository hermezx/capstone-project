import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

const dummyDispatch = jest.fn();
const dummySubmit = jest.fn();

test('date input has required attribute', () => {
  render(<BookingForm availableTimes={[]} dispatch={dummyDispatch} submitForm={dummySubmit} />);
  const dateInput = screen.getByLabelText(/choose date/i);
  expect(dateInput).toBeRequired();
});

test('guests input has min=1 and max=10', () => {
  render(<BookingForm availableTimes={[]} dispatch={dummyDispatch} submitForm={dummySubmit} />);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');
  expect(guestsInput).toBeRequired();
});

test('time and occasion selects are required', () => {
  render(<BookingForm availableTimes={["17:00"]} dispatch={dummyDispatch} submitForm={dummySubmit} />);
  
  const timeSelect = screen.getByLabelText(/choose time/i);
  const occasionSelect = screen.getByLabelText(/occasion/i);

  expect(timeSelect).toBeRequired();
  expect(occasionSelect).toBeRequired();
});