import React, {useState, useEffect} from 'react';
import './style.css';
import {useParams} from "react-router-dom";

export const Reservation = () => {
  let { id } = useParams();
  const [reservation, setReservation] = useState(null);

  useEffect(() => {
    fetch(`https://leviexpress-backend.herokuapp.com/api/reservation?id=${id}`)
      .then(result => result.json())
      .then(json => {
        setReservation(json);
        console.log(json);
      });
  }, []);
  
  return (
    <>
    {
      reservation !== null && 
      <div className="reservation container">
        <h2>Vaše e-jízdenka č. {reservation.data.reservationId}</h2>
        <div className="reservation__body">
          <div className="reservation__headings">
            <p>Datum cesty:</p>
            <p>Odjezd:</p>
            <p>Příjezd:</p>
            <p>Sedadlo:</p>
          </div>
          <div className="reservation__info">
            <p>{reservation.data.date}</p>
            <p>
              {reservation.data.fromCity.name},&nbsp;
              {reservation.data.fromCity.time}
            </p>
            <p>
              {reservation.data.toCity.name},&nbsp;
              {reservation.data.toCity.time}
            </p>
            <p>{reservation.data.seatNumber}</p>
          </div>
        </div>
      </div>
    }
    </>
  );
};