import React from 'react'
import styles from './MemeSVGViewer.module.css'
interface IMemeSVGViewerProps  {}

const MemeSvgViewer :React.FC<IMemeSVGViewerProps>= ({}) => {
  return (
    <div className={styles.MemeSvgViewer} data-testid="MemeSvgViewer">MemeSvgViewer</div>
  )
}

export default MemeSvgViewer