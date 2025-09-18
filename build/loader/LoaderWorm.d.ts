import React from "react";
import { type IFBaseProps } from "./Backdrop";
export interface LoaderWormProps extends IFBaseProps {
    size?: number;
    color?: string;
    length?: number;
    speed?: number;
    thickness?: number;
}
export declare const LoaderWorm: React.FC<LoaderWormProps>;
export default LoaderWorm;
