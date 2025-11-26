import React from 'react';
import styles from './TemplateName.module.css';

interface ITemplateNameProps {}

const TemplateName: React.FC<ITemplateNameProps> = (props) => {
  return(
    <div className={styles.TemplateName} data-testid="TemplateName">
      TemplateName Component
    </div>
  );
}

export default TemplateName;
