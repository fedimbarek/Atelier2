import React, { useState } from 'react';

function Events() {
    const [taskName, setTaskName] = useState('30');
    const [NameEvent, setEvent] = useState('event');
return (
    <>
     <div class="row justify-content-md-center">
    <div class="card" style={{ width: "18rem" }}>
  <img src="images/event1.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{NameEvent}</h5>
    <p class="card-text">Price: {taskName}</p>
    <p>Number of participants </p>
  </div>
</div>
</div>
    </>
)

}
export default Events;