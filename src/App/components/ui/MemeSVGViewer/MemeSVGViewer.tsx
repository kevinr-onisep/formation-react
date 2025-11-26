import React from 'react';
import styles from './MemeSvgViewer.module.css';

interface IMemeSvgViewerProps {}

const MemeSvgViewer: React.FC<IMemeSvgViewerProps> = (props) => {
  return(
    <div className={styles.MemeSvgViewer} data-testid="MemeSvgViewer">
      MemeSvgViewer Component
    </div>
  );
}

export default MemeSvgViewer;
