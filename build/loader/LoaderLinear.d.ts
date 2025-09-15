import React from 'react';
import { type IFBaseProps } from './Backdrop';
export interface LoaderLinearProps extends IFBaseProps {
    thickness?: number;
    fullWidth?: boolean;
    speed?: number;
}
export declare const LoaderLinear: React.FC<LoaderLinearProps>;
export default LoaderLinear;
