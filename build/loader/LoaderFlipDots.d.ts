import React from "react";
import { type IFBaseProps } from "./Backdrop";
export interface LoaderFlipDotsProps extends IFBaseProps {
    size?: number;
    color?: string;
    speed?: number;
}
export declare const LoaderFlipDots: React.FC<LoaderFlipDotsProps>;
export default LoaderFlipDots;
