import React from "react";
import { type IFBaseProps } from "./Backdrop";
export interface LoaderOrbitalProps extends IFBaseProps {
    size?: number;
    color?: string;
    speed?: number;
}
export declare const LoaderOrbital: React.FC<LoaderOrbitalProps>;
export default LoaderOrbital;
