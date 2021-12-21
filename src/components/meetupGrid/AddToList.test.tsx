import { fireEvent, render, screen } from "@testing-library/react";
import { shallow } from "enzyme";
import { IState as Props } from "../meetupGrid/Card";
import AddToList from "./AddToList";
import List from "./List";

describe("AddToList component", () => {
  it("renders without errors", () => {
    //smoke test
    const testData: Props = {
      people: [
        {
          name: "",
          rating: 0,
          note: "",
          attending: "",
        },
      ],
    };
    render(<AddToList people={testData.people} setPeople={() => {}} />);
  });

  it("renders input fields", () => {
    const testData: Props = {
      people: [
        {
          name: "",
          rating: 0,
          note: "",
          attending: "",
        },
      ],
    };
    render(<AddToList people={testData.people} setPeople={() => {}} />);
    screen.getByPlaceholderText("Name");
    screen.getByPlaceholderText("Rating");
    screen.getByPlaceholderText("Leave a review...");
    screen.getByPlaceholderText("Attending");
  });

  it("renders Confirm button", () => {
    const testData: Props = {
      people: [
        {
          name: "",
          rating: 0,
          note: "",
          attending: "",
        },
      ],
    };
    render(<AddToList people={testData.people} setPeople={() => {}} />);
    screen.getByText("Confirm");
  });

  it("displays alert if required fields are not filled", () => {
    window.alert = jest.fn(() => ({}));
    const testData: Props = {
      people: [
        {
          name: "",
          rating: 0,
          note: "",
          attending: "",
        },
      ],
    };
    const alertSpy = jest.spyOn(window, "alert");

    render(<AddToList people={testData.people} setPeople={() => {}} />);
    const input = screen.getByPlaceholderText("Name");
    const button = screen.getByText("Confirm");
    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.click(button);
    expect(alertSpy).toHaveBeenCalled();
  });

  



    
    
});
