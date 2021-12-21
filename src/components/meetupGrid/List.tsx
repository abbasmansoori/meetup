import React from "react";

import {IState as IProps} from "../meetupGrid/Card";
import "./list.scss";


const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li key={Math.random()} className="list">
          <div className="list-header">
            <h3 className="list-header__name"><em>Name:</em> {person.name}</h3>
            <h2 className="list-header__rating"><em>Rating:</em> {person.rating}</h2>
            <h2 className="list-header__attending"><em>Attending:</em> {person.attending}</h2>
            <p className="list-header__note"><em>Review:</em> {person.note}</p>
          </div>
        </li>
      );
    });
  };

  return (
    <div>
      <ul className="ulist">{renderList()}</ul>
      
    </div>
  );
};

export default List;
