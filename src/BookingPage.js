import React, { useState, useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from "./api";
/* global fetchAPI, submitAPI */

export const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    return fetchAPI(action.date);
  }
  return state;
};

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

export const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate("/confirmed");
    }
  };

  return (
    <div className="booking-container">
      <div className="form-container">
        <h1 className="form-intro">Book Your Reservation!</h1>
        <p className="form-description">Please input your details below to proceed with your booking reservation</p>
        <div>
          <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
        </div>      
      </div>
    </div>
  );
};

export default BookingPage;