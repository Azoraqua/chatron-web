import { FunctionComponent, ReactNode } from 'react';

type Props = Record<PropertyKey, unknown>;

export declare global {
  export declare type FC<P extends Props = {}> = FunctionComponent<P>;
  export declare type FCC<P extends Props = {}> = FunctionComponent<P & { children: ReactNode }>;
}