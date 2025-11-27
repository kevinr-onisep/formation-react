import { MemeSVGViewer as Msvg } from "orsys-tjs-meme";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
interface IMemeSvgViewerProps {
  basePath: "/" | "";
}

const MemeSvgViewer: React.FC<IMemeSvgViewerProps> = (props) => {
  const images = useSelector((s:RootState) => s.ressources.images);
  const current = useSelector((s:RootState) => s.current.meme);
  return (
    <Msvg
      {...props}
      meme={current}
      image={images.find((img) => img.id === current.imageId)}
    />
  );
};

export default MemeSvgViewer;
