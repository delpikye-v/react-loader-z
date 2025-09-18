import React from "react";
import { type IFBaseProps } from "./Backdrop";
export interface LoaderGearProps extends IFBaseProps {
    size?: number;
    color?: string;
    speed?: number;
}
export declare const LoaderGear: React.FC<LoaderGearProps>;
export default LoaderGear;
