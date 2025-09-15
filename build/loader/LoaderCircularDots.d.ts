import React from 'react';
import { type IFBaseProps } from './Backdrop';
export interface LoaderCircularDotsProps extends IFBaseProps {
    dotSize?: number;
    dots?: number;
    speed?: number;
}
export declare const LoaderCircularDots: React.FC<LoaderCircularDotsProps>;
export default LoaderCircularDots;
