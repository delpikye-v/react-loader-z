import React from "react";
import { type IFBaseProps } from "./Backdrop";
export interface LoaderJellyfishProps extends IFBaseProps {
    size?: number;
    color?: string;
    speed?: number;
}
export declare const LoaderJellyfish: React.FC<LoaderJellyfishProps>;
export default LoaderJellyfish;
