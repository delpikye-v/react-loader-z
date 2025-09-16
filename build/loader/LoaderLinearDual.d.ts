import React from 'react';
import { type IFBaseProps } from './Backdrop';
export interface LoaderLinearDualProps extends IFBaseProps {
    thickness?: number;
    fullWidth?: boolean;
    speed?: number;
}
export declare const LoaderLinearDual: React.FC<LoaderLinearDualProps>;
export declare const LoaderLinearDualFullWidth: React.FC<LoaderLinearDualProps>;
export default LoaderLinearDual;
