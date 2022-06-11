import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import SearchBar from '../SearchBar/SearchBar';
import {AiOutlineHome, AiOutlineLogout} from "react-icons/ai"
import { BiHeart } from "react-icons/bi"
import {CgProfile} from "react-icons/cg"
import "./NavBar.css"


export default function NavBar({ user, setUser, handleSearch }) {


  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  return (
    <>
    <nav className='navbar' >
      <div className='container nav-container'>
      <input class="checkbox" type="checkbox" name="" id="" />
      <div class="hamburger-lines">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </div>
      <div className='nav-items'>
      <span className='welcome-user'>Welcome, {user.name}</span>
      <div className='NavLinks'>
      <Link to="/"> HOME &nbsp; <AiOutlineHome /></Link>
      <Link to="/userprofile"> PROFILE &nbsp; <CgProfile /></Link>
      <Link to="/favorites"> FAVORITES &nbsp; <BiHeart /></Link>
      <Link to="" onClick={handleLogOut} className="log-out-link">LOGOUT &nbsp; <AiOutlineLogout /></Link>
        </div>
      <SearchBar className="searchBarNav" handleSearch={handleSearch} />
      </div>
      </div>
    </nav>
    </>
  );
}