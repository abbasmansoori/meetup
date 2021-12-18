import { useEffect, useState } from "react";
import { Meetup } from "../../models/Meetup";
import { data } from "./Grid";
import "./Card.scss";
interface Props {
  meetup: Meetup;
  data: Meetup[];
}

const Card = ({ meetup }: Props) => {
  const [people, setPeople] = useState({
    name: "",
    rating: "",
    note: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setPeople({
      ...people,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    // if(!people.name || !people.rating || !people.note){
    //   alert("Please fill out all fields");
    //   return;

    // }
    setPeople({
      ...people,
      name: "",

      rating: "",

      note: "",
    });

    console.log(people);
  };

  return (
    <section className="card">
      <h3>{meetup.title}</h3>
      <p>{meetup.date}</p>
      <li className="card-list">
        <div className="card-list__header">
          <h2>{people.name}</h2>
          <h2>{people.rating}</h2>
          <h2>{people.note}</h2>
        </div>
      </li>
      <input
        type="text"
        placeholder="Name"
        className="card-list__input"
        value={people.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="number"
        placeholder="Rating"
        className="card-list__input"
        value={people.rating}
        onChange={handleChange}
        name="rating"
      />
      <textarea
        placeholder="Comment"
        className="card-list__input"
        value={people.note}
        onChange={handleChange}
        name="note"
      />
      <button className="card-list__button" onClick={handleClick} />
    </section>
  );
};

export default Card;
