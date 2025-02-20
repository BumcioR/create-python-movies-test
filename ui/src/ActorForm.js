import React, { useState } from "react";

function ActorForm({ onActorSubmit, buttonLabel }) {
  const [actor, setActor] = useState({
    name: "",
    birthdate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActor((prevActor) => ({
      ...prevActor,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onActorSubmit(actor);
    setActor({ name: "", birthdate: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={actor.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Birthdate:
        <input
          type="date"
          name="birthdate"
          value={actor.birthdate}
          onChange={handleChange}
        />
      </label>
      <button type="submit">{buttonLabel}</button>
    </form>
  );
}

export default ActorForm;
