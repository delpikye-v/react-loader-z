import React from "react";
import { type IFBaseProps } from "./Backdrop";
export interface LoaderAtomProps extends IFBaseProps {
    size?: number;
    color?: string;
    thickness?: number;
    speed?: number;
}
export declare const LoaderAtom: React.FC<LoaderAtomProps>;
export default LoaderAtom;
