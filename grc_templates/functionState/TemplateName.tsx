import React, { useEffect, useState } from "react";
import styles from "./TemplateName.module.css";
interface ITemplateNameProps {}
interface ITemplateNameState {}
const TemplateName: React.FC<ITemplateNameProps> = ({}) => {
  const [state, setState] = useState<ITemplateNameState>({});
  useEffect(() => {
    //montage // update

    return () => {
      //demontage
    };
  }, []);

  return (
    <div className={styles.TemplateName} data-testid="TemplateName">
      TemplateName
    </div>
  );
};

export default TemplateName;
