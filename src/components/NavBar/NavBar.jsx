import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className='Nav'>
      <Link to='/'><img className="Logo"src="Movielo-logo.png" /></Link>
      <Link> Search</Link>
      &nbsp; | &nbsp;
      <Link to="/watchlist">Watch List</Link>
      &nbsp; | &nbsp;
      <Link to="/watchedlist">Watched List</Link>
      &nbsp;&nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}