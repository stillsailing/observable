import * as React from 'react';
import { Store as ReduxStore, Middleware, Action } from 'redux';
import { StreamMiddleware } from 'redux-observable-action';
import { ConnectedProps, DuckState, DuckType, PayloadAction } from './type';
import Base from './Base';
export interface DuckRuntimeOptions {
    prefix?: string;
    middlewares?: Middleware[];
}
/**
 * @deprecated
 * Please use `Store` instead of `Runtime`
 *
 * ```js
 * import { Store } from 'observable-duck'
 * Store.create(Base)
 * ```
 */
export default class Runtime<TDuck extends Base = Base> implements Disposable {
    static create<T extends Base>(Duck: DuckType<T>, options?: DuckRuntimeOptions): Runtime<T>;
    duck: TDuck;
    redux: ReduxStore<DuckState<TDuck>, Action>;
    protected middleware: StreamMiddleware<PayloadAction, DuckState<TDuck>>;
    protected constructor(Duck: DuckType<TDuck>, options?: DuckRuntimeOptions);
    protected initReduxStore(extraMiddlewares?: Middleware[]): void;
    /**
     * @deprecated
     * Please use `connect` instead of `Runtime.connect`
     *
     * ```js
     * import { Store } from 'observable-duck'
     * import { connect } from 'observable-duck/react'
     * const store = Store.create(Base)
     * const ConnectedComponent = connect(store, ReactComponent)
     * ```
     */
    connect<OriginProps>(Component: React.FunctionComponent<OriginProps & ConnectedProps<TDuck>>): React.FunctionComponent<OriginProps>;
    [Symbol.dispose](): void;
}
