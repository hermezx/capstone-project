/* global fetchAPI, submitAPI */

import React, {useState, useEffect} from "react";

const BookingForm = ( {availableTimes, dispatch, submitForm}) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);

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

    useEffect(() => {
        const valid = date && time && guests >= 1 && guests <= 10 && occasion;
        setIsFormValid(valid);
        }, [date, time, guests, occasion]);

    return (
        <form className="form-book" onSubmit={handleSubmit} style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" onChange={handleDateChange} required/>
        <label htmlFor="res-time">Choose time</label>
            <select id="res-time" onChange={(e) => setTime(e.target.value)} required>
                {(availableTimes || []).map((t) => (
                    <option key={t} value={t}>{t}</option>
                ))}
            </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={((e) => setGuests(parseInt(e.target.value)))} required/>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" onChange={((e) => setOccasion(e.target.value))} required>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <input className="submit-button" disabled={!isFormValid}type="submit" value="Make Your reservation" aria-label="submit form"/>
        </form>
    );
}

export default BookingForm;