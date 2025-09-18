import React from "react";
import { type IFBaseProps } from "./Backdrop";
export interface LoaderInfinityProps extends IFBaseProps {
    size?: number;
    color?: string;
    thickness?: number;
    speed?: number;
}
export declare const LoaderInfinity: React.FC<LoaderInfinityProps>;
export default LoaderInfinity;
