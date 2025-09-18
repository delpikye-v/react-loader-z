import React from "react";
import { type IFBaseProps } from "./Backdrop";
export interface LoaderCubeRotateProps extends IFBaseProps {
    size?: number;
    color?: string;
    speed?: number;
}
export declare const LoaderCubeRotate: React.FC<LoaderCubeRotateProps>;
export default LoaderCubeRotate;
