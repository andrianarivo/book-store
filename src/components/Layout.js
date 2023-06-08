import { NavLink, Outlet } from 'react-router-dom';
import styles from '../styles/Layout.module.css';

export default function Layout() {
  const links = [
    { path: '/', text: 'Home' },
    { path: 'categories', text: 'Categories' },
  ];
  return (
    <div className={styles.root}>
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
