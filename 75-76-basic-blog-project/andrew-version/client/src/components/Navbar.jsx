import { NavLink } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className='top-nav'>
      <div className='nav-text-large'>My App</div>
      <ul className='nav-list'>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/posts'>Posts</NavLink>
        </li>
        <li>
          <NavLink to='/todos'>Todos</NavLink>
        </li>
        <li>
          <NavLink to='/users'>Users</NavLink>
        </li>
      </ul>
    </nav>
  );
}
