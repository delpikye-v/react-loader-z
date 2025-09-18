import React from "react";
import { type IFBaseProps } from "./Backdrop";
export interface LoaderDNAProps extends IFBaseProps {
    size?: number;
    color?: string;
    speed?: number;
}
export declare const LoaderDNA: React.FC<LoaderDNAProps>;
export default LoaderDNA;
