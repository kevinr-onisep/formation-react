import React from 'react'
import styles from './TemplateName.module.css'
interface ITemplateNameProps  {}

const TemplateName :React.FC<ITemplateNameProps>= ({}) => {
  return (
    <div className={styles.TemplateName} data-testid="TemplateName">TemplateName</div>
  )
}

export default TemplateName