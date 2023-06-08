import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  const links = [
    { path: '/', text: 'Home' },
    { path: 'categories', text: 'Categories' },
  ];
  return (
    <div>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
