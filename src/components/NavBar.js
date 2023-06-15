import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import styles from '../styles/NavBar.module.css';

export default function NavBar() {
  const location = useLocation();
  const pathname = location.pathname.replace(/^\/(?=\w+)/, '');
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
                <NavLink
                  className={`${pathname === link.path ? styles.active : ''}`}
                  to={link.path}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className={`${styles.user} d-flex items-center justify-center`}>
            <FontAwesomeIcon
              className={styles.icon}
              icon={icon({ name: 'user', style: 'solid' })}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
