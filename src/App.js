import Homepage from './Homepage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import {Routes, Route} from 'react-router-dom';

import React, { Fragment } from 'react';

import './App.css';

function App() {

  return (

      <Fragment>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/booking-page" element={<BookingPage />}/>
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </Fragment>
  );
}

export default App;
