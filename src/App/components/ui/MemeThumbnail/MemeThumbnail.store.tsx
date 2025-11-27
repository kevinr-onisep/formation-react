import React from "react";
import MTh from "./MemeThumbnail";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
interface IMemeThumbnailProps {
  basePath?: string;
}

const MemeThumbnail: React.FC<IMemeThumbnailProps> = (props) => {
  const ressources = useSelector((s: RootState) => s.ressources);
  return <MTh {...props} {...ressources} />;
};

export default MemeThumbnail;
