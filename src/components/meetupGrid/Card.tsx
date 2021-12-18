import { useEffect, useState } from "react";
import { Meetup } from "../../models/Meetup";
import List from "./List";
import "./Card.scss";
import AddToList from "./AddToList";
interface Props {
  meetup: Meetup;
  data: Meetup[];
}
export interface IState{
  people:{
    name: string;
    rating: number;
    note: string;
    attending?: string
  }[]
}


const Card = ({ meetup }: Props) => {
  
  const [people, setPeople] = useState<IState["people"]>([
    
  ])

 
  

  return (
    <section className="card">
      <h3 className="card-title">{meetup.title}</h3>
      <p className="card-date">{meetup.date}</p>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople}/>
      
    </section>
  );
};

export default Card;
