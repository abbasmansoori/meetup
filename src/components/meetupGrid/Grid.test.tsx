import {render, screen } from '@testing-library/react';
import Grid from "./Grid";


describe("Grid component", () => {
  it("renders without errors", () => {
    //smoke test
    render(<Grid searchText=""/>);
  });
});
