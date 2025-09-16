import React from 'react';
import { type IFBaseProps } from './Backdrop';
export interface LoaderRippleProps extends IFBaseProps {
    size?: number;
    color?: string;
    speed?: number;
}
export declare const LoaderRipple: React.FC<LoaderRippleProps>;
export default LoaderRipple;
