import { useState } from "react";
import { addEvent } from "../service/api";
import { useNavigate } from "react-router-dom";

const AddEvent = () => {

  const [event, setEvent] = useState({
    name: "",
    description: "",
    price: "",
    img: ""
  });

  const navigate = useNavigate();

  const onValueChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const addEventDetails = async () => {
    await addEvent(event);
    navigate("/events");
  };

  return (
    <div className="container mt-5">
      <h2>Add Event</h2>

      <input name="name" placeholder="Name" onChange={onValueChange} className="form-control m-2" />
      <input name="description" placeholder="Description" onChange={onValueChange} className="form-control m-2" />
      <input name="price" placeholder="Price" onChange={onValueChange} className="form-control m-2" />
      <input name="img" placeholder="Image name" onChange={onValueChange} className="form-control m-2" />

      <button onClick={addEventDetails} className="btn btn-primary">
        Add Event
      </button>
    </div>
  );
};

export default AddEvent;