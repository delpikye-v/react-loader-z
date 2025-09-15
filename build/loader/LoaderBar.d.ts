import React from 'react';
import { type IFBaseProps } from './Backdrop';
export interface LoaderBarProps extends IFBaseProps {
    speed?: number;
    thickness?: number;
}
export declare const LoaderBar: React.FC<LoaderBarProps>;
export default LoaderBar;
