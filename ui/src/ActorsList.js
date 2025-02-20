import React from "react";
import ActorListItem from "./ActorListItem";

function ActorsList({ actors, onDeleteActor }) {
  return (
    <ul className="actors-list">
      {actors.map((actor) => (
        <ActorListItem
          key={actor.id}
          actor={actor}
          onDeleteActor={onDeleteActor}
        />
      ))}
    </ul>
  );
}

export default ActorsList;
