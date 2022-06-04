import { Link } from 'react-router-dom';
import { useState } from 'react'
import * as userService from '../../utilities/users-service';
import SearchBar from "../SearchBar/SearchBar";


export default function NavBar({ user, setUser }) {
  const [search, setSearch] = useState(" ");
  
  const handleChange = (evt) => {
    setSearch(evt.target.value);
  };
  const handleClick = (evt) => {
    fetch(`https://api.nftport.xyz/v0/search?text=${search}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "5653735e-0d97-4b07-bb3e-6ee1e8f96233"
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  return (
    <nav>
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
      <div className="search">
          <input
            id="outlined-basic"
            variant="outlined"
            label="Search"
            value={search}
            onChange={handleChange}
          />
          <button type="button" onClick={handleClick}>
            Click Me!
          </button>
        </div>
      <SearchBar search={search}/>
    </nav>
  );
}