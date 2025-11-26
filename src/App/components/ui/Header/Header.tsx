import React from 'react'
import styles from './Header.module.css'
interface IHeaderProps  {}

const Header :React.FC<IHeaderProps>= ({}) => {
  return (
    <div className={styles.Header} data-testid="Header">
      <p>Header</p>
    </div>
  )
}

export default Header