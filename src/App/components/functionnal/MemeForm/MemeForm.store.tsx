import { useDispatch, useSelector } from "react-redux";
import MemeFormUnconnected from "./MemeForm";
import type { MemeInterface } from "orsys-tjs-meme";
import { update } from "../../../stores/current";
import type { AppDispatch, RootState } from "../../../stores/store";

const MemeForm = (props) => {
  const images = useSelector((s: RootState) => s.ressources.images);
  const current = useSelector((s: RootState) => s.current.meme);
  const d: AppDispatch = useDispatch();
  return (
    <MemeFormUnconnected
      {...props}
      meme={current}
      images={images}
      onMemeChange={(meme: MemeInterface) => {
        d(update(meme));
      }}
    />
  );
};

export default MemeForm;
