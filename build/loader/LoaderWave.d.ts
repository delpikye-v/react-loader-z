import React from 'react';
import { type IFBaseProps } from './Backdrop';
export interface LoaderWaveProps extends IFBaseProps {
    bars?: number;
    speed?: number;
}
export declare const LoaderWave: React.FC<LoaderWaveProps>;
export default LoaderWave;
