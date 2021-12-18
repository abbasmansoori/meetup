
import "./header.scss";

import { useState } from "react";

interface Props {
  searchText: string;
  setSearchText: (search: string) => void;
}
const Header = ({searchText, setSearchText}: Props) => {
  
  return (
    <header className="main-header">
      <h1 className="main-header__title">Meetup</h1>
      <div>
        {/* <form className="main-header__search-box" onSubmit={props.handleSearch}> */}
        <form className="main-header__search-box">
          <input
            placeholder="Search Meetup"
            type="text"
            value={searchText}
            onChange={event => setSearchText(event.target.value)}
            // value={props.search}
            // onChange={(e) => props.setSearchTe(e.target.value)}
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
