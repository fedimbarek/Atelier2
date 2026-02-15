import { Card, Button } from "react-bootstrap";
import React, { useState ,useEffect} from 'react';
import { Link } from "react-router-dom";

const Event = ({ event, onBook, onLike }) => {
 
     const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/data/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    
  <div className="container">
  <div className="row">
    {events.map((event) => (
      <div key={event.id} className="col-lg-4 col-md-6 mb-4">
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={`/images/${event.img}`} // ici c'est 'image', pas 'img'
            alt={event.name}
          />
          <div className="card-body">
            <h5 className="card-title">{event.name}</h5>
              <div className="card-body">
                <Link to={`/events/${event.name}`} style={{ textDecoration: "none" }}>
                  <h5 className="card-title">{event.name}</h5>
                </Link>
                </div>
            <p className="card-text">{event.description}</p>
            <p className="card-text">Price: {event.price}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );

  
};

export default Event;
