import React from 'react';
export declare const keepAliveProviderTypeName = "$$KeepAliveProvider";
export declare const START_MOUNTING_DOM = "startMountingDOM";
export declare enum LIFECYCLE {
    MOUNTED = 0,
    UPDATING = 1,
    UNMOUNTED = 2
}
export interface ICacheItem {
    children: React.ReactNode;
    keepAlive: boolean;
    lifecycle: LIFECYCLE;
    renderElement?: HTMLElement;
    activated?: boolean;
    ifStillActivate?: boolean;
    reactivate?: () => void;
}
export interface ICache {
    [key: string]: ICacheItem;
}
export interface IKeepAliveProviderImpl {
    storeElement: HTMLElement;
    cache: ICache;
    keys: string[];
    eventEmitter: any;
    existed: boolean;
    providerIdentification: string;
    setCache: (identification: string, value: ICacheItem) => void;
    unactivate: (identification: string) => void;
    isExisted: () => boolean;
}
export interface IKeepAliveProviderProps {
    include?: string | string[] | RegExp;
    exclude?: string | string[] | RegExp;
}
export default class KeepAliveProvider extends React.PureComponent<IKeepAliveProviderProps> implements IKeepAliveProviderImpl {
    static displayName: string;
    storeElement: HTMLElement;
    cache: ICache;
    keys: string[];
    eventEmitter: {
        on: (eventNames: string | string[], listener: (...args: any) => void, direction?: boolean) => void;
        off: (eventNames: string | string[], listener: (...args: any) => void) => void;
        emit: (eventNames: string | string[], ...args: any) => void;
        clear: () => void;
        listenerCount: (eventNames: string | string[]) => number;
        removeAllListeners: (eventNames: string | string[]) => void;
    };
    existed: boolean;
    private needRerender;
    providerIdentification: string;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    isExisted: () => boolean;
    setCache: (identification: string, value: ICacheItem) => void;
    componentDidCatch(): void;
    unactivate: (identification: string) => void;
    private startMountingDOM;
    render(): JSX.Element;
}
