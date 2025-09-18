import React from "react";
import { type IFBaseProps } from "./Backdrop";
export interface LoaderFireworkProps extends IFBaseProps {
    size?: number;
    color?: string;
    speed?: number;
}
export declare const LoaderFirework: React.FC<LoaderFireworkProps>;
export default LoaderFirework;
