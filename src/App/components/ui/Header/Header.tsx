import React from 'react';
import styles from './Header.module.css';

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = (props) => {
  return(
    <div className={styles.Header} data-testid="Header">
      Header Component
    </div>
  );
}

export default Header;
