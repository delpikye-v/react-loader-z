import React from "react";
import { type IFBaseProps } from "./Backdrop";
export interface LoaderPacmanProps extends IFBaseProps {
    size?: number;
    color?: string;
    speed?: number;
}
export declare const LoaderPacman: React.FC<LoaderPacmanProps>;
export default LoaderPacman;
