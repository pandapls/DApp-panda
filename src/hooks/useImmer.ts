import { produce, Draft, freeze } from 'immer';
import { useState, useCallback } from 'react';

export type DraftFunction<S> = (draft: Draft<S>) => void;
export type Updater<S> = (arg: S | DraftFunction<S>) => void;
export type ImmerHook<S> = [S, Updater<S>];

//函数签名
export function useImmer<S = unknown>(initialValue: S | (() => S)): ImmerHook<S>;

export function useImmer<T>(initialValue: T) {
  //封装useState
  const [val, updateValue] = useState(() =>
    freeze(typeof initialValue === 'function' ? initialValue() : initialValue, true),
  );
  return [
    val,
    useCallback((updater: Updater<T>) => {
      if (typeof updater === 'function') updateValue(produce(updater));
      else updateValue(freeze(updater));
    }, []),
  ];
}
