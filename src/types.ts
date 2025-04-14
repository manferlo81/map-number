export type MapFunction<O = number, I = number> = (input: I, inputMin: number, inputMax: number, outputMin: number, outputMax: number) => O;
export type CompiledMapFunction<O = number, I = number> = (input: I) => O;
export type TransformFunction<I = number, O = number> = (input: I) => O;

export type MapNumberFunction = MapFunction;
export type CompiledMapNumberFunction = CompiledMapFunction;
