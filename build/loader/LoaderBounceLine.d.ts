import React from "react";
import { type IFBaseProps } from "./Backdrop";
export interface LoaderBounceLineProps extends IFBaseProps {
    size?: number;
    color?: string;
    speed?: number;
}
export declare const LoaderBounceLine: React.FC<LoaderBounceLineProps>;
export default LoaderBounceLine;
