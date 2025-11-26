import React from 'react';
import styles from './Navbar.module.css';

interface INavbarProps {}

const Navbar: React.FC<INavbarProps> = (props) => {
  return(
    <div className={styles.Navbar} data-testid="Navbar">
      Navbar Component
    </div>
  );
}

export default Navbar;
