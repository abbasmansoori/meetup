import Card from "./Card";
import { Meetup } from "../../models/Meetup";
import "./grid.scss";
import { useEffect, useState } from "react";

export const data: Meetup[] = [
  {
    id: 1,
    title: "Coding Meetup",
    date: "2020-01-01",
    name: "",
    rating: 0,
    note: "",
    url: "https://www.preface.ai/blog/wp-content/uploads/2021/05/photo-1610563166150-b34df4f3bcd6-768x575.jpeg"
  },
  {
    id: 2,
    title: "Car Meetup",
    date: "2020-03-20",
    name: "",
    rating: 0,
    note: "",
    url: "https://cdnb.artstation.com/p/assets/images/images/006/489/563/small/arevix-official-evo7-tokyodrift-arevix.jpg?1499006360"
  },
  {
    id: 3,
    title: "Pottery Class",
    date: "2020-04-01",
    name: "",
    rating: 0,
    note: "",
    url: "https://i2-prod.walesonline.co.uk/incoming/article14529054.ece/ALTERNATES/s615b/ghostJPG.jpg"
  },

  {
    id: 4,
    title: "Fight Club",
    date: "2022-05-01",
    name: "",
    rating: 0,
    note: "",
    url: "https://media.newyorker.com/photos/5dbafcc91b4a6700085a7a9b/2:2/w_1707,h_1708,c_limit/Baker-FightClub.jpg"
  },
  {
    id: 5,
    title: "Anime Watch",
    date: "2022-06-01",
    name: "",
    rating: 0,
    note: "",
    url: "https://i.insider.com/5e820b04671de06758588fb8"
  },
  {
    id: 6,
    title: "Wine Tasting",
    date: "2022-07-01",
    name: "",
    rating: 0,
    note: "",
    url: "https://spacehuntr.com/wp-content/uploads/2020/11/Wine-Tasting-Paris-via-masterclass.jpg"
  },
];

interface Props {
  searchText: string,
  
  
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
        <Card key={meetup.id} meetup={meetup} 
        data={data} 
        />
      
      ))}
    </main>
  );
};

export default Grid;
