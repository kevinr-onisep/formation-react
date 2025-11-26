import React from 'react';
import styles from './Footer.module.css';

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = (props) => {
  return(
    <div className={styles.Footer} data-testid="Footer">
      Footer Component
    </div>
  );
}

export default Footer;
