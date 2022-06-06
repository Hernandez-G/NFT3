import { Link } from 'react-router-dom';
// import { useState } from 'react'
import * as userService from '../../utilities/users-service';
// import SearchBar from "../SearchBar/SearchBar";


export default function NavBar({ user, setUser }) {


  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  return (
    <nav>
      <Link to="/userprofile">Profile</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}