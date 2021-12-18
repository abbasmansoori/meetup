import { render, screen } from "@testing-library/react";
import Card from "./Card";
import { Meetup } from "../../models/Meetup";

describe("Card component", () => {
  it("renders without errors", () => {
    //smoke test
    const testData: Meetup = {
      title: "test", date: "test", id: 1,
      name: "",
      rating: 0,
      note: ""
    };
    render(<Card meetup={testData} data={[]} />);
  });

  it("renders title and date", () => {
    const testData: Meetup = {
      title: "test", date: "test", id: 2,
      name: "",
      rating: 0,
      note: ""
    };
    render(<Card meetup={testData} data={[]} />);
    screen.getAllByText(testData.title);
    screen.getAllByText(testData.date);
  });
});
