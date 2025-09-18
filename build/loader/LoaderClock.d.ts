import React from "react";
import { type IFBaseProps } from "./Backdrop";
export interface LoaderClockProps extends IFBaseProps {
    size?: number;
    color?: string;
    speed?: number;
}
export declare const LoaderClock: React.FC<LoaderClockProps>;
export default LoaderClock;
