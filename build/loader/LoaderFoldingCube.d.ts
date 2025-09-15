import React from 'react';
import { type IFBaseProps } from './Backdrop';
export interface LoaderFoldingCubeProps extends IFBaseProps {
    /** Seconds per animation cycle. Lower = faster */
    speed?: number;
}
export declare const LoaderFoldingCube: React.FC<LoaderFoldingCubeProps>;
export default LoaderFoldingCube;
