import React from "react";
import AddToList from "./AddToList";
import {IState as IProps} from "../meetupGrid/Card";



const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="list">
          <div className="list-header">
            <h3>name: {person.name}</h3>
            <h2>rating: {person.rating}</h2>
            <h2>Attending: {person.attending}</h2>
            <p className="list-note">review: {person.note}</p>
          </div>
        </li>
      );
    });
  };

  return (
    <div>
      <ul>{renderList()}</ul>
      
    </div>
  );
};

export default List;
