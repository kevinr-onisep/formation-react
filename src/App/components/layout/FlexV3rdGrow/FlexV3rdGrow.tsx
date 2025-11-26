import React from "react";
import styles from "./FlexV3rdGrow.module.css";

interface FlexV3rdGrowProps {
  children: Array<string | React.ReactElement> | string | React.ReactElement;
}

const FlexV3rdGrow: React.FC<FlexV3rdGrowProps> = ({ children="" }) => {
  return (
    <div className={styles.FlexV3rdGrow} data-testid="FlexV3rdGrow">
      {children}
    </div>
  );
};

export default FlexV3rdGrow;
