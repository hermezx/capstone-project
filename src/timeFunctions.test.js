jest.mock('./api', () => ({
  fetchAPI: jest.fn(() => ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]),
}));

// ✅ 2. Then import the functions you are testing
import { initializeTimes, updateTimes } from './BookingPage';

describe('initializeTimes', () => {
  test('should return the correct initial times array', () => {
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    expect(initializeTimes()).toEqual(expectedTimes);
  });
});

describe('updateTimes', () => {
  test('should return initialized times on UPDATE_TIMES action', () => {
    const currentState = ["17:00", "18:00"];
    const action = { type: "UPDATE_TIMES", date: new Date("2025-06-09") };
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    expect(updateTimes(currentState, action)).toEqual(expectedTimes);
  });
});