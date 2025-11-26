import React from 'react'
import styles from './Footer.module.css'
interface IFooterProps  {}

const Footer :React.FC<IFooterProps>= ({}) => {
  return (
    <div className={styles.Footer} data-testid="Footer">Footer</div>
  )
}

export default Footer