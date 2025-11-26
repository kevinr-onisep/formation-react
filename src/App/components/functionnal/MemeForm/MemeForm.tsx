import React, { useEffect, useState } from "react";
import styles from "./MemeForm.module.css";
import type { MemeInterface } from "orsys-tjs-meme";

interface IMemeFormProps {
  meme: MemeInterface;
  onMemeChange: (meme: MemeInterface) => void;
}

interface IMemeFormState {}

const MemeForm: React.FC<IMemeFormProps> = ({ meme, onMemeChange }) => {
  
  useEffect(() => {
    //montage // update

    return () => {
      //demontage
    };
  }, []);

  const onNumberChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const s = { ...meme };
    s[evt.target.name] = parseInt(evt.target.value);
    onMemeChange({ ...meme, [evt.target.name]: evt.target.value });
  };

  const onTextChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const s = { ...meme };
    s[evt.target.name] = evt.target.value;
    onMemeChange({ ...meme, [evt.target.name]: evt.target.value });
  };

  const onCheckboxChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const s = { ...meme };
    s[evt.target.name] = evt.target.checked;
    onMemeChange({ ...meme, [evt.target.name]: evt.target.checked });
  };

  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      <form>
        <label htmlFor="titre">
          <h1>Titre</h1>
        </label>
        <br />
        <input name="titre" id="titre" onChange={onTextChange} />
        <hr />
        <label htmlFor="image">Image</label>
        <br />
        <select name="image" id="image">
          <option>futurama1.jpg</option>
          <option>futurama2.png</option>
          <option>futurama3.png</option>
          <option>gwenadu.jpg</option>
        </select>
        <hr />
        <label htmlFor="text">Texte</label>
        <br />
        <input
          name="text"
          id="text"
          type="text"
          value={meme.text}
          onChange={onTextChange}
        />
        <br />
        <label htmlFor="x" style={{ display: "inline" }}>
          x :
        </label>
        <input
          className={styles.smallNumber}
          name="x"
          id="x"
          type="number"
          value={meme.x}
          onChange={onNumberChange}
        />
        <label htmlFor="y" style={{ display: "inline" }}>
          y :
        </label>
        <input
          className={styles.smallNumber}
          name="y"
          id="y"
          type="number"
          value={meme.y}
          onChange={onNumberChange}
        />
        <hr />
        <br />
        <h2>Decorations</h2>
        <label htmlFor="color" style={{ display: "inline" }}>
          color :
        </label>
        <input name="color" id="color" type="color" onChange={onTextChange} />
        <br />
        <label htmlFor="fontSize" style={{ display: "inline" }}>
          font-size :
        </label>
        <input
          className={styles.smallNumber}
          name="fontSize"
          id="fontSize"
          type="number"
          min="0"
          value={meme.fontSize}
          onChange={onNumberChange}
        />
        px
        <br />
        <label htmlFor="fontWeight" style={{ display: "inline" }}>
          font-weight :
        </label>
        <input
          className={styles.smallNumber}
          name="fontWeight"
          id="fontWeight"
          type="number"
          min="100"
          step="100"
          max="900"
          value={meme.fontWeight}
          onChange={onNumberChange}
        />
        <br />
        <input
          name="underline"
          id="underline"
          type="checkbox"
          onChange={onCheckboxChange}
        />
        &nbsp;
        <label htmlFor="underline" style={{ display: "inline" }}>
          underline
        </label>
        &nbsp;<p style={{ display: "inline" }}>/</p>
        &nbsp;
        <label htmlFor="italic" style={{ display: "inline" }}>
          italic
        </label>
        &nbsp;
        <input
          name="italic"
          id="italic"
          type="checkbox"
          onChange={onCheckboxChange}
        />
        <hr />
        <br />
        <p>
          <label htmlFor="frameSizeX" style={{ display: "inline" }}>
            frame size X :
          </label>
          <input
            className={styles.smallNumber}
            name="frameSizeX"
            id="frameSizeX"
            type="number"
            min="0"
            onChange={onNumberChange}
          />
          px{" "}
        </p>
        <p>
          <label htmlFor="frameSizeY" style={{ display: "inline" }}>
            frame size y :
          </label>
          <input
            className={styles.smallNumber}
            name="frameSizeY"
            id="frameSizeY"
            type="number"
            min="0"
            onChange={onNumberChange}
          />
          px
        </p>
        <br />
      </form>
    </div>
  );
};

export default MemeForm;
