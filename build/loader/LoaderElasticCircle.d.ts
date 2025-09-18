import React from "react";
import { type IFBaseProps } from "./Backdrop";
export interface LoaderElasticCircleProps extends IFBaseProps {
    size?: number;
    color?: string;
    speed?: number;
}
export declare const LoaderElasticCircle: React.FC<LoaderElasticCircleProps>;
export default LoaderElasticCircle;
