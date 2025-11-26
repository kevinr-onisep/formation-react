import React from 'react'
import styles from './Header.module.css'
interface IHeaderProps  {}

const Header :React.FC<IHeaderProps>= ({}) => {
  return (
    <div className={styles.Header} data-testid="Header">Header</div>
  )
}

export default Header