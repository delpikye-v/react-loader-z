import React from 'react';
import { type IFBaseProps } from './Backdrop';
export interface LoaderMeteorProps extends IFBaseProps {
    size?: number;
    thickness?: number;
    speed?: number;
}
export declare const LoaderMeteor: React.FC<LoaderMeteorProps>;
export default LoaderMeteor;
