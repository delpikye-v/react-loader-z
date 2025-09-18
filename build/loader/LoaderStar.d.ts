import React from "react";
import { type IFBaseProps } from "./Backdrop";
export interface LoaderStarProps extends IFBaseProps {
    size?: number;
    color?: string;
    speed?: number;
}
export declare const LoaderStar: React.FC<LoaderStarProps>;
export default LoaderStar;
