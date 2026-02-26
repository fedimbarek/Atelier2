import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getallEvents, editEvent } from "../service/api";

const UpdateEvent = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState({
    name: "",
    description: "",
    price: "",
    img: ""
  });

  useEffect(() => {
    loadEvent();
  }, []);

  const loadEvent = async () => {
    const response = await getallEvents(id);
    setEvent(response.data);
  };

  const onValueChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const updateEventDetails = async () => {
    await editEvent(id, event);
    navigate("/events");
  };

  return (
    <div className="container mt-5">
      <h2>Update Event</h2>

      <input name="name" value={event.name} onChange={onValueChange} className="form-control m-2" />
      <input name="description" value={event.description} onChange={onValueChange} className="form-control m-2" />
      <input name="price" value={event.price} onChange={onValueChange} className="form-control m-2" />
      <input name="img" value={event.img} onChange={onValueChange} className="form-control m-2" />

      <button onClick={updateEventDetails} className="btn btn-success">
        Update Event
      </button>
    </div>
  );
};

export default UpdateEvent;