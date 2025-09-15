import React from 'react';
import { type IFBaseProps } from './Backdrop';
export interface LoaderSpinnerProps extends IFBaseProps {
    /** Seconds per full rotation (lower = faster) */
    speed?: number;
}
export declare const LoaderSpinner: React.FC<LoaderSpinnerProps>;
export default LoaderSpinner;
