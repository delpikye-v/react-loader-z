import React from "react";
import { type IFBaseProps } from "./Backdrop";
export interface LoaderRadarProps extends IFBaseProps {
    size?: number;
    color?: string;
    speed?: number;
}
export declare const LoaderRadar: React.FC<LoaderRadarProps>;
export default LoaderRadar;
