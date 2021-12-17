import Card from "./Card";
import { Meetup } from "../../models/Meetup";
import "./grid.scss";
import { useEffect, useState } from "react";

const data: Meetup[] = [
  {
    id: 1,
    title: "Coding Meetup",
    date: "2020-01-01",
  },
  {
    id: 2,
    title: "Car Meetup",
    date: "2020-01-01",
  },
  {
    id: 3,
    title: "Pottery Class",
    date: "2020-01-01",
  },

  {
    id: 4,
    title: "Fight Club",
    date: "2022-01-01",
  },
  {
    id: 5,
    title: "Anime Watch",
    date: "2022-01-01",
  },
  {
    id: 6,
    title: "Wine Tasting",
    date: "2022-01-01",
  },
];

interface Props {
  searchText: string;
}

const Grid: React.FC<Props> = ({searchText}) => {
  const [filteredEvents, setFilteredEvents] = useState<Meetup[]>([...data]);
  useEffect(() => {
   if(searchText){
    const searchFilter = filteredEvents.filter(event=> (event.title.toLowerCase().includes(searchText.toLowerCase()) ))
    setFilteredEvents([...searchFilter])
   }else{
     setFilteredEvents([...data])
   }
    
  }, [searchText])
  return (
    <main className="card-grid">
      {filteredEvents.map((meetup) => (
        <Card key={meetup.id} meetup={meetup} />
      ))}
    </main>
  );
};

export default Grid;
