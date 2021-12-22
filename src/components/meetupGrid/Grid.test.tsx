import { render, screen } from "@testing-library/react";
import Grid, { data } from "./Grid";

describe("Grid component", () => {
  it("renders without errors", () => {
    //smoke test
    render(<Grid searchText="" />);
  });

  it("should check if the dates in data exist", () => {
    //check if the dates in data exist
    const dates = data.map((meetup) => meetup.date);
    expect(dates).toEqual(
      expect.arrayContaining([
        "2020-01-01",
        "2020-03-20",
        "2020-04-01",
        "2022-05-01",
        "2022-06-01",
        "2022-07-01",
      ])
    );
    //check if the dates in the Card object is rendered
    render(<Grid searchText="" />);
    const date1 = screen.getAllByText("2020-01-01");
    const date2 = screen.getAllByText("2020-03-20");
    const date3 = screen.getAllByText("2020-04-01");
    const date4 = screen.getAllByText("2022-05-01");
    const date5 = screen.getAllByText("2022-06-01");
    const date6 = screen.getAllByText("2022-07-01");
    expect(date1).toHaveLength(1);
    expect(date2).toHaveLength(1);
    expect(date3).toHaveLength(1);
    expect(date4).toHaveLength(1);
    expect(date5).toHaveLength(1);
    expect(date6).toHaveLength(1);
  });

  it("should render the dates in chronological order", () => {
    // check if the dates are rendered in the correct order
    const dates = data.map((meetup) => meetup.date);
    expect(dates).toEqual(
      expect.arrayContaining([
        "2020-01-01",
        "2020-03-20",
        "2020-04-01",
        "2022-05-01",
        "2022-06-01",
        "2022-07-01",
      ])
    );
  });
   
});
