import React from 'react';
import { type IFBaseProps } from './Backdrop';
export interface LoaderDotsCircleProps extends IFBaseProps {
    dotSize?: number;
    dots?: number;
    speed?: number;
}
export declare const LoaderDotsCircle: React.FC<LoaderDotsCircleProps>;
export default LoaderDotsCircle;
