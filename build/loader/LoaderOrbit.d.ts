import React from "react";
import { type IFBaseProps } from "./Backdrop";
export interface LoaderOrbitProps extends IFBaseProps {
    size?: number;
    color?: string;
    count?: number;
    speed?: number;
}
export declare const LoaderOrbit: React.FC<LoaderOrbitProps>;
export default LoaderOrbit;
