import * as React from 'react';
import { Sequences, AnimationProps, AnimateKeyframesProps } from './types';
export interface Props {
    play: boolean;
    sequences?: Sequences;
    children?: any;
}
export declare const AnimateContext: React.Context<{
    animationStates: {};
    register: (data: AnimationProps | AnimateKeyframesProps) => void;
}>;
export default function AnimateGroup({ play, sequences, children, }: Props): JSX.Element;
