import { render, screen } from '@testing-library/react';
import React from 'react'
import App from './App';
import { shallow, mount } from 'enzyme';
import Header from './components/header/Header';



test("renders without errors", () => {
 //smoke test
  render(<App />);

  
});

it("shows matching event when typing in the searchbar", () => {
  const wrapper = mount(<App />);
  
  // shallow(<Header searchText="" setSearchText={() => {}} />);
  const searchString = "Meetup";
  const input = wrapper.find("header input");
  input.simulate("change", { target: { value: searchString } });

  const cards = wrapper.find("main.card-grid .card");
  const titles = cards.find("h3");
  expect(titles.length).toBe(6)
  titles.forEach (title => { 
      const actualTitle = title.text();
      expect(actualTitle).toContain(searchString);
  })

});