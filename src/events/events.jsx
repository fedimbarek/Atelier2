// import React, { useState } from 'react';

// function Events() {
//     const [taskName, setTaskName] = useState('30');
//     const [NameEvent, setEvent] = useState('event');
// return (
//     <>
//      <div class="row justify-content-md-center">
//     <div class="card" style={{ width: "18rem" }}>
//   <img src="images/event1.jpg" class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">{NameEvent}</h5>
//     <p class="card-text">Price: {taskName}</p>
//     <p>Number of participants </p>
//   </div>
// </div>
// </div>
//     </>
// )

// }
// export default Events;
import { useEffect, useState } from "react";
import { getallEvents, deleteEvent } from "../service/api";
import { Link } from "react-router-dom";

const Events = () => {

  const [events, setEvents] = useState([]);

  const loadEvents = async () => {
    const response = await getallEvents();
    setEvents(response.data);
  };

  useEffect(() => {
    loadEvents();
  }, []);

  const handleDelete = async (id) => {
    await deleteEvent(id);
    loadEvents();
  };

  return (
    <div className="container">
      <div className="row">
        {events.map((event) => (
          <div key={event.id} className="col-md-4">
            <div className="card m-3">
              <img src={`/images/${event.img}`} className="card-img-top" />
              <div className="card-body">
                <h5>{event.name}</h5>
                <p>{event.description}</p>
                <p>Price: {event.price}</p>

                <Link to={`/events/${event.id}`} className="btn btn-info m-1">
                  Details
                </Link>

                <Link to={`/update/${event.id}`} className="btn btn-warning m-1">
                  Update
                </Link>

                <button
                  onClick={() => handleDelete(event.id)}
                  className="btn btn-danger m-1"
                >
                  Delete
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;