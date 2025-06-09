// BookingPage.test.js
import { initializeTimes } from './BookingPage';
import * as api from './api';

test('initializeTimes returns available times from fetchAPI', () => {
  const mockTimes = ["18:00", "19:30"];
  jest.spyOn(api, 'fetchAPI').mockReturnValue(mockTimes); 

  const times = initializeTimes();

  expect(times).toEqual(mockTimes);
});