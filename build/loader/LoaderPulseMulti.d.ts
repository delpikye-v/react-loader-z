import React from 'react';
import { type IFBaseProps } from './Backdrop';
export interface LoaderPulseMultiProps extends IFBaseProps {
    count?: number;
    speed?: number;
}
export declare const LoaderPulseMulti: React.FC<LoaderPulseMultiProps>;
export default LoaderPulseMulti;
