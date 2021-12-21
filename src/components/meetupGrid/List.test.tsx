import { render, screen } from "@testing-library/react";
import { IState as IProps } from "./Card";
import List from "./List";

describe("List component", () => {

  it("renders without error", () => {
    render(<List people={[]} />);
  });

  it("should render the list values", () => {
    
    const testData: IProps = {
        people: [
            {
                name: "",
                rating: 0,
                note: "",
                attending: "",
            },
        ],
    };
    render(<List people={testData.people} />);
    expect(screen.getByText("Name:")).toBeInTheDocument();
    expect(screen.getByText("Rating:")).toBeInTheDocument();
    expect(screen.getByText("Attending:")).toBeInTheDocument();
    expect(screen.getByText("Review:")).toBeInTheDocument();
  })
});
