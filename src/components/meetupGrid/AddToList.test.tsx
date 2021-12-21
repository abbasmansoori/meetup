import { render, screen } from "@testing-library/react";
import {IState as Props} from "../meetupGrid/Card";
import AddToList from "./AddToList";

describe("AddToList component", () => {
  it("renders without errors", () => {
    //smoke test
    const testData: Props = {
        people: [
            {
                name: "",
                rating: 0,
                note: "",
                attending: ""
            }
        ]
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
                    attending: ""
                }
            ]
        };
        render(<AddToList people={testData.people} setPeople={() => {}} />);
        screen.getByPlaceholderText("Name");
        screen.getByPlaceholderText("Rating");
        screen.getByPlaceholderText("Leave a review...");
        screen.getByPlaceholderText("Attending");
    }   
    )

    
});
