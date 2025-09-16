import React from 'react';
import { type IFBaseProps } from './Backdrop';
export interface LoaderLinearFillWipeProps extends IFBaseProps {
    thickness?: number;
    fullWidth?: boolean;
    speed?: number;
}
export declare const LoaderLinearFillWipe: React.FC<LoaderLinearFillWipeProps>;
export default LoaderLinearFillWipe;
