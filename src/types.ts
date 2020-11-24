export type MapFunction<O = number, I = number> = (value: I, inMin: number, inMax: number, outMin: number, outMax: number) => O;
export type TransformFunction<O = number, I = number> = (value: I) => O;
export { TransformFunction as CompiledMapFunction };

export type MapNumberFunction = MapFunction;
export type CompiledMapNumberFunction = TransformFunction;
