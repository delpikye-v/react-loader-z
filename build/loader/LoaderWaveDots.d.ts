import React from 'react';
import { type IFBaseProps } from './Backdrop';
export interface LoaderWaveDotsProps extends IFBaseProps {
    dots?: number;
    dotSize?: number;
    color?: string;
    speed?: number;
}
export declare const LoaderWaveDots: React.FC<LoaderWaveDotsProps>;
export default LoaderWaveDots;
