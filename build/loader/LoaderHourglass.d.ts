import React from "react";
import { type IFBaseProps } from "./Backdrop";
export interface LoaderHourglassProps extends IFBaseProps {
    size?: number;
    color?: string;
    speed?: number;
}
export declare const LoaderHourglass: React.FC<LoaderHourglassProps>;
export default LoaderHourglass;
