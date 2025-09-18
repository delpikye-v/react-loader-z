import React from "react";
import { type IFBaseProps } from "./Backdrop";
export interface LoaderLightningProps extends IFBaseProps {
    size?: number;
    color?: string;
    speed?: number;
}
export declare const LoaderLightning: React.FC<LoaderLightningProps>;
export default LoaderLightning;
