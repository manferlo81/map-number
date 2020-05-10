export type MapFunction<T> = (num: number, inMin: number, inMax: number, outMin: number, outMax: number) => T;
export type TransformFunction<T> = (value: number) => T;
export type CompiledMapFunction<T> = (num: number) => T;

export type MapNumberFunction = MapFunction<number>;
export type CompiledMapNumberFunction = CompiledMapFunction<number>;
