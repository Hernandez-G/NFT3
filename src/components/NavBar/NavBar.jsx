import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import SearchBar from '../SearchBar/SearchBar';
import "./NavBar.css"


export default function NavBar({ user, setUser, handleSearch }) {


  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  return (
    <nav className='nav-hover'>
      <SearchBar handleSearch={handleSearch} />
      &nbsp; | &nbsp;
      <Link to="/" class="home-link">Home</Link>
      &nbsp; | &nbsp;
      <Link to="/userprofile" className="user-profile">Profile</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new" >New Order</Link>
      &nbsp; | &nbsp;
      <span className='welcome-user'>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut} className="log-out-link">Log Out</Link>
    </nav>
  );
}