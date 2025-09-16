import React from 'react';
import { type IFBaseProps } from './Backdrop';
export interface LoaderFlipSquareProps extends IFBaseProps {
    size?: number;
    color?: string;
    speed?: number;
}
export declare const LoaderFlipSquare: React.FC<LoaderFlipSquareProps>;
export default LoaderFlipSquare;
