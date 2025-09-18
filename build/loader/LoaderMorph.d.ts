import React from "react";
import { type IFBaseProps } from "./Backdrop";
export interface LoaderMorphProps extends IFBaseProps {
    size?: number;
    color?: string;
    speed?: number;
}
export declare const LoaderMorph: React.FC<LoaderMorphProps>;
export default LoaderMorph;
