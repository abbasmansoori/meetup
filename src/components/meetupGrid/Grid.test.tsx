import { render, screen } from "@testing-library/react";
import Grid, { data } from "./Grid";

describe("Grid component", () => {
  it("renders without errors", () => {
    //smoke test
    render(<Grid searchText="" />);
  });

  it("should check if the dates in data exist", () => {
   
    render(<Grid searchText="" />);
   
    const date4 = screen.getAllByText("2022-05-01");
    const date5 = screen.getAllByText("2022-06-01");
    const date6 = screen.getAllByText("2022-07-01");
    const date7 = screen.getAllByText("2030-07-01");
    
  
    expect(date4).toHaveLength(1);
    expect(date5).toHaveLength(1);
    expect(date6).toHaveLength(1);
    expect(date7).toHaveLength(1);
  });
    
    
    

   
});
