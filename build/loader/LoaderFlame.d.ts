import React from "react";
import { type IFBaseProps } from "./Backdrop";
export interface LoaderFlameProps extends IFBaseProps {
    size?: number;
    color?: string;
    speed?: number;
}
export declare const LoaderFlame: React.FC<LoaderFlameProps>;
export default LoaderFlame;
