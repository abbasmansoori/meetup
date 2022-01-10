import { fireEvent, render, screen } from "@testing-library/react";
import { shallow } from "enzyme";
import { IState as Props } from "../meetupGrid/Card";
import AddToList from "./AddToList";
import List from "./List";

describe("AddToList component", () => {
  let testData: Props;
  //using beforeEach to make it easier to repeat the same test
  beforeEach(() => {
    testData = {
      people: [
        {
          name: "",
          rating: 0,
          note: "",
          attending: "",
        },
      ],
    };
  });

  it("renders without errors", () => {
    //smoke test

    render(<AddToList people={testData.people} setPeople={() => {}} />);
  });

  it("renders input fields", () => {
    render(<AddToList people={testData.people} setPeople={() => {}} />);
    screen.getByPlaceholderText("Name");
    screen.getByPlaceholderText("Rating");
    screen.getByPlaceholderText("Leave a review...");
    screen.getByPlaceholderText("Attending");
  });

  it("renders Confirm button", () => {
    render(<AddToList people={testData.people} setPeople={() => {}} />);
    screen.getByText("Confirm");
  });

  it("displays alert if required fields are not filled", () => {
    window.alert = jest.fn(() => ({}));

    const alertSpy = jest.spyOn(window, "alert");

    render(<AddToList people={testData.people} setPeople={() => {}} />);
    const input = screen.getByPlaceholderText("Name");
    const button = screen.getByText("Confirm");
    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.click(button);
    expect(alertSpy).toHaveBeenCalled();
  });
});
