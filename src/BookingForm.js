/* global fetchAPI, submitAPI */

import React, {useState} from "react";


const BookingForm = ( {availableTimes, dispatch, submitForm}) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");

    const handleDateChange = (e) => {
        const selectedDateStr = e.target.value;
        setDate(selectedDateStr);
        const selectedDate = new Date(selectedDateStr);
        dispatch({ type: "UPDATE_TIMES", date: selectedDate });
        };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm({date, time, guests, occasion});
    };

    return (
        <form className="form-book" onSubmit={handleSubmit} style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" onChange={handleDateChange}/>
        <label htmlFor="res-time">Choose time</label>
            <select id="res-time" onChange={(e) => setTime(e.target.value)}>
                {(availableTimes || []).map((t) => (
                    <option key={t} value={t}>{t}</option>
                ))}
            </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={((e) => setGuests(parseInt(e.target.value)))}/>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" onChange={((e) => setOccasion(e.target.value))}>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <input className="submit-button" type="submit" value="Make Your reservation"/>
        </form>
    );
}

export default BookingForm;