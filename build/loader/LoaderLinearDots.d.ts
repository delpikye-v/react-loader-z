import React from 'react';
import { type IFBaseProps } from './Backdrop';
export interface LoaderLinearDotsProps extends IFBaseProps {
    /** Number of dots */
    dots?: number;
    /** Space (px) between dots */
    spacing?: number;
    /** Seconds per bounce cycle (lower = faster) */
    speed?: number;
}
export declare const LoaderLinearDots: React.FC<LoaderLinearDotsProps>;
export default LoaderLinearDots;
