import React from "react";
import { type IFBaseProps } from "./Backdrop";
export interface LoaderGalaxyProps extends IFBaseProps {
    size?: number;
    color?: string;
    count?: number;
    speed?: number;
}
export declare const LoaderGalaxy: React.FC<LoaderGalaxyProps>;
export default LoaderGalaxy;
