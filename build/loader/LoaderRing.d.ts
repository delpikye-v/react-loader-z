import React from 'react';
import { type IFBaseProps } from './Backdrop';
export interface LoaderRingProps extends IFBaseProps {
    /** Seconds per full rotation (lower = faster) */
    speed?: number;
}
export declare const LoaderRing: React.FC<LoaderRingProps>;
export default LoaderRing;
