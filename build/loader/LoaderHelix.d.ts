import React from "react";
import { type IFBaseProps } from "./Backdrop";
export interface LoaderHelixProps extends IFBaseProps {
    size?: number;
    color?: string;
    count?: number;
    speed?: number;
}
export declare const LoaderHelix: React.FC<LoaderHelixProps>;
export default LoaderHelix;
