import { render, screen } from "@testing-library/react";
import Card from "./Card";
import { Meetup } from "../../models/Meetup";

describe("Card component", () => {
  it("renders without errors", () => {
    //smoke test
    const testData: Meetup = { title: "test", date: "test", id: 1 };
    render(<Card meetup={testData} />);
  });

  it("renders title and date", () => {
    const testData: Meetup = { title: "test", date: "test", id: 2 };
    render(<Card meetup={testData} />);
    screen.getAllByText(testData.title);
    screen.getAllByText(testData.date);
  });
});
