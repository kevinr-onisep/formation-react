import React from "react";
import styles from "./FlexH1stGrow.module.css";

interface FlexH1stGrowProps {
  children: Array<string | React.ReactElement> | string | React.ReactElement;
}

const FlexH1stGrow: React.FC<FlexH1stGrowProps> = ({ children="" }) => {
  return (
    <div className={styles.FlexH1stGrow} data-testid="FlexH1stGrow">
      {children}
    </div>
  );
};

export default FlexH1stGrow;
