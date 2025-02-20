import React, { useState } from "react";

function AddActorToMovieForm({
  onAddActorToMovie,
  movies,
  actors,
  buttonLabel,
}) {
  const [selectedMovie, setSelectedMovie] = useState("");
  const [selectedActor, setSelectedActor] = useState("");

  const handleMovieChange = (e) => setSelectedMovie(e.target.value);
  const handleActorChange = (e) => setSelectedActor(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddActorToMovie(selectedMovie, selectedActor);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select Movie:
        <select value={selectedMovie} onChange={handleMovieChange}>
          <option value="">-- Select a Movie --</option>
          {movies.map((movie) => (
            <option key={movie.id} value={movie.id}>
              {movie.title}
            </option>
          ))}
        </select>
      </label>

      <label>
        Select Actor:
        <select value={selectedActor} onChange={handleActorChange}>
          <option value="">-- Select an Actor --</option>
          {actors.map((actor) => (
            <option key={actor.id} value={actor.id}>
              {actor.name}
            </option>
          ))}
        </select>
      </label>

      <button type="submit">{buttonLabel}</button>
    </form>
  );
}

export default AddActorToMovieForm;
