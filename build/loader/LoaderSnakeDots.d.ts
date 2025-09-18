import React from "react";
import { type IFBaseProps } from "./Backdrop";
export interface LoaderSnakeDotsProps extends IFBaseProps {
    size?: number;
    color?: string;
    speed?: number;
}
export declare const LoaderSnakeDots: React.FC<LoaderSnakeDotsProps>;
export default LoaderSnakeDots;
