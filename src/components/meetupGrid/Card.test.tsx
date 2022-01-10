import { render, screen } from "@testing-library/react";
import Card from "./Card";
import Grid, {data} from "./Grid"
import { Meetup } from "../../models/Meetup";

describe("Card component", () => {

  const testData: Meetup = {
    title: "test",
    date: "2020-01-01",
    id: 2,
    name: "",
    rating: 0,
    note: "",
    url: "",
  };
  const testData2: Meetup = {
    title: "test",
    date: "2020-03-20",
    id: 1,
    name: "",
    rating: 0,
    note: "",
    url: "",
  };
  const testData3: Meetup = {
    title: "test",
    date: "2020-04-01",
    id: 3,
    name: "",
    rating: 0,
    note: "",
    url: "",
  };
  const testData4: Meetup = {
    title: "test",
    date: "2022-05-01",
    id: 4,
    name: "",
    rating: 0,
    note: "",
    url: "",
  };
  const testData5: Meetup = {
    title: "test",
    date: "2022-06-01",
    id: 5,
    name: "",
    rating: 0,
    note: "",
    url: "",
  };
  const testData6: Meetup = {
    title: "test",
    date: "2022-07-01",
    id: 6,
    name: "",
    rating: 0,
    note: "",
    url: "",
  };
  const testData7: Meetup = {
    title: "test",
    date: "2030-07-01",
    id: 7,
    name: "",
    rating: 0,
    note: "",
    url: "",
  };
 
  it("renders without errors", () => {
    //smoke test
    const testData: Meetup = {
      title: "test",
      date: "test",
      id: 1,
      name: "",
      rating: 0,
      note: "",
      url: "",
    };
    render(<Card meetup={testData} data={[]} />);
  });

  it("renders title and date", () => {
    const testData: Meetup = {
      title: "test",
      date: "test",
      id: 2,
      name: "",
      rating: 0,
      note: "",
      url: "",
    };
    render(<Card meetup={testData} data={[]} />);
    screen.getAllByText(testData.title);
    screen.getAllByText(testData.date);
  });

  it("should render correct props with date", () => {
    // get the dates from the Card components and test that they are in chronological order
    
    //render the cards
    render(<Card meetup={testData} data={[]} />);
    render(<Card meetup={testData2} data={[]} />);
    render(<Card meetup={testData3} data={[]} />);
    render(<Card meetup={testData4} data={[]} />);
    render(<Card meetup={testData5} data={[]} />);
    render(<Card meetup={testData6} data={[]} />);
    render(<Card meetup={testData7} data={[]} />);
    //get the dates from the cards
    const dates = screen.getAllByText(/\d{4}-\d{2}-\d{2}/);

    expect(dates[0].textContent).toBe("2020-01-01");
    expect(dates[1].textContent).toBe("2020-03-20");
    expect(dates[2].textContent).toBe("2020-04-01");
    expect(dates[3].textContent).toBe("2022-05-01");
    expect(dates[4].textContent).toBe("2022-06-01");
    expect(dates[5].textContent).toBe("2022-07-01");
    expect(dates[6].textContent).toBe("2030-07-01");
  });


});
