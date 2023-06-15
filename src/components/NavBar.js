import { NavLink } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';

export default function NavBar() {
  const links = [
    { path: '/', text: 'Books' },
    { path: 'categories', text: 'Categories' },
  ];
  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={`${styles.navBar} d-flex items-center justify-start`}>
          <h2>Bookstore CMS</h2>
          <ul className={styles.menu}>
            {links.map((link) => (
              <li className={styles.navItem} key={link.path}>
                <NavLink to={link.path}>{link.text}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
