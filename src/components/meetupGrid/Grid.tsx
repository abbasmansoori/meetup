import Card from "./Card";
import { Meetup } from "../../models/Meetup";
import "./grid.scss";

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

const Grid = () => {
  // const testData: Meetup = { title: "test", date: "test" };
  return (
    <main className="card-grid">
      {data.map((meetup) => (
        <Card key={meetup.id} meetup={meetup} />
      ))}
    </main>
  );
};

export default Grid;
