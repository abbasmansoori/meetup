import Header from "./Header";
import { render, screen } from "@testing-library/react";
import { shallow } from "enzyme";

describe("Header component", () => {
  it("renders without errors", () => {
    //smoke test
    render(<Header searchText="" setSearchText={() => {}} />);
  });

  it(" renders empty input initially", () => {
    //white box, we know there is an input element
    render(<Header searchText="" setSearchText={() => {}} />);
    const wrapper = shallow(<Header searchText="" setSearchText={() => {}} />);
    const input = wrapper.find("input");
    expect(input.exists()).toBe(true);

    const value = input.render().val();
    expect(value).toBe("");
  });

  
});
