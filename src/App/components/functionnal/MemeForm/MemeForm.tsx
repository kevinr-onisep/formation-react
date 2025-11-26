import React, { useEffect, useState } from "react";
import styles from "./MemeForm.module.css";
interface IMemeFormProps {}
interface IMemeFormState {}
const MemeForm: React.FC<IMemeFormProps> = ({}) => {
  const [state, setState] = useState<IMemeFormState>({});
  useEffect(() => {
    //montage // update

    return () => {
      //demontage
    };
  }, []);

  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      MemeForm
    </div>
  );
};

export default MemeForm;
