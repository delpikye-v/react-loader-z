/// <reference types="react" />
export interface IFBaseProps {
    loading?: boolean;
    size?: number;
    color?: string;
    center?: boolean;
    backdrop?: boolean;
}
export declare const Backdrop: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $show: boolean;
}>> & string;
