/*import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const EventDetails = () => {

  const { name } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch("/data/events.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedEvent = data.find(e => e.name.toString() === name);
        setEvent(selectedEvent);
      })
      .catch((err) => console.error(err));
  }, [name]);

  if (!event) {
    return <h2 className="text-center mt-5">Event not found</h2>;
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <img
          src={`/images/${event.img}`}
          className="card-img-top"
          alt={event.name}
        />
        <div className="card-body">
          <h2>{event.name}</h2>
          <p>{event.description}</p>
          <h4>Price: {event.price}</h4>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
*/