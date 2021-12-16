import {Meetup} from "../../models/Meetup";
import "./Card.scss";
interface Props {
  meetup: Meetup;
  
}

const Card = ({meetup}: Props) => {
  return (
    <section className="card">
      <h3>{meetup.title}</h3>
      <p>{meetup.date}</p>
    </section>
  );
};

export default Card;
