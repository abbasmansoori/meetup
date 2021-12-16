import React from 'react'
import "./header.scss";

 const Header = () => {
  return (
    <header className="main-header">
      <h1 className="main-header__title">
       Meetup
      </h1>
      <div>
        {/* <form className="main-header__search-box" onSubmit={props.handleSearch}> */}
        <form className="main-header__search-box">
          <input
            type="search"
            placeholder="Search for an event"
            required
            // value={props.search}
            // onChange={(e) => props.setSearch(e.target.value)}
          />
        </form>
      </div>
    </header>
  );
}


export default Header;