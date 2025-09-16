import React from 'react';
import { type IFBaseProps } from './Backdrop';
export interface LoaderTypingProps extends IFBaseProps {
    dotSize?: number;
    color?: string;
    speed?: number;
}
export declare const LoaderTyping: React.FC<LoaderTypingProps>;
export default LoaderTyping;
