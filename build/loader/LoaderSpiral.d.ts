import React from "react";
import { type IFBaseProps } from "./Backdrop";
export interface LoaderSpiralProps extends IFBaseProps {
    size?: number;
    color?: string;
    speed?: number;
}
export declare const LoaderSpiral: React.FC<LoaderSpiralProps>;
export default LoaderSpiral;
