import React, { useEffect } from "react";
import styles from "./MemeForm.module.css";
import type { ImageInterface, MemeInterface } from "orsys-tjs-meme";
import { Form } from "react-bootstrap";

interface IMemeFormProps {
  meme: MemeInterface;
  images: Array<ImageInterface>;
  onMemeChange: (meme: MemeInterface) => void;
}

const MemeForm: React.FC<IMemeFormProps> = ({ meme, onMemeChange, images }) => {
  useEffect(() => {
    //montage // update

    return () => {
      //demontage
    };
  }, []);

  const onNumberChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    onMemeChange({ ...meme, [evt.target.name]: parseInt(evt.target.value) });
  };

  const onTextChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onMemeChange({ ...meme, [evt.target.name]: evt.target.value });
  };

  const onCheckboxChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onMemeChange({ ...meme, [evt.target.name]: evt.target.checked });
  };

  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      <form>
        <Form.Label htmlFor="titre">Titre</Form.Label>
        <br />
        <Form.Control
          type="text"
          name="titre"
          id="titre"
          onChange={onTextChange}
        />
        <hr />
        <label htmlFor="image">Image</label>
        <br />
        <select
          name="imageId"
          id="imageId"
          value={meme.imageId}
          onChange={onNumberChange}
        >
          <option value={-1}>No image</option>
          {images.map((image) => (
            <option value={image.id} key={image.id}>
              {image.name}
            </option>
          ))}
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
