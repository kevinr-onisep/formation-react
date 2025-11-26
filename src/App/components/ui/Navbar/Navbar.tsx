import React from 'react'
import styles from './Navbar.module.css'
interface INavbarProps  {}

const Navbar :React.FC<INavbarProps>= ({}) => {
  return (
    <div className={styles.Navbar} data-testid="Navbar">Navbar</div>
  )
}

export default Navbar