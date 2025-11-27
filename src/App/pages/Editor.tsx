import { useDispatch, useSelector } from "react-redux";
import FlexH1stGrow from "../components/layout/FlexH1stGrow/FlexH1stGrow";
import MemeForm from "../components/functionnal/MemeForm/MemeForm.store";
import MemeSvgViewer from "../components/ui/MemeSVGViewer/MemeSVGViewer.store";
import type { AppDispatch, RootState } from "../stores/store";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { clear, update } from "../stores/current";

const Editor = () => {
  const d: AppDispatch = useDispatch();
  const params = useParams();
  const memes = useSelector((s: RootState) => s.ressources.memes);
  const navigation = useNavigate();
  useEffect(() => {
    if (undefined !== params.id) {
      const memeFound = memes.find((m) => m.id === Number(params.id));
      if (undefined !== memeFound) {
        d(update(memeFound));
      } else {
        navigation("/edit");
      }
    } else {
      d(clear());
    }
  }, [d, params, memes, navigation]);
  return (
    <FlexH1stGrow>
      <MemeSvgViewer basePath="" />
      <MemeForm />
    </FlexH1stGrow>
  );
};

export default Editor;
