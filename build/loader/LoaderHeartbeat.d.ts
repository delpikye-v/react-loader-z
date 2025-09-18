import React from "react";
import { type IFBaseProps } from "./Backdrop";
export interface LoaderHeartbeatProps extends IFBaseProps {
    size?: number;
    color?: string;
    speed?: number;
}
export declare const LoaderHeartbeat: React.FC<LoaderHeartbeatProps>;
export default LoaderHeartbeat;
