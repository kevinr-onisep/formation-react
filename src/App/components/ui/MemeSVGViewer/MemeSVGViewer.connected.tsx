import { MemeSVGViewer as Msvg } from "orsys-tjs-meme";
import { useSelector } from "react-redux";
import type { RootState } from "../../../stores/store";

interface IMemeSVGViewerProps {
  basePath?: string;
}

const MemeSvgViewer: React.FC<IMemeSVGViewerProps> = ({ basePath = "" }) => {
  const current = useSelector(
    (storeState: RootState) => storeState.current.meme
  );
  const images = useSelector((s: RootState) => s.ressources.images);

  return (
    <Msvg
      basePath={basePath}
      image={images.find((img) => img.id === current.imageId)}
      meme={current}
    />
  );
};

export default MemeSvgViewer;
