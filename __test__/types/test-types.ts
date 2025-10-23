import type { ceil, clamp, compile, CompiledMapFunction, CompiledMapNumberFunction, create, floor, limit, map, MapFunction, MapNumberFunction, round, transform, transformed, TransformFunction, wrap } from '../../src';
import type { Assert, AssignableTo, Equals, Expect, Should } from './tools';

type UnknownFunction = (...args: never[]) => unknown;
type ConversionFunction<I, O> = (input: I) => O;

export type Results = Assert<[
  Expect<Should<'MapFunction type is a function', AssignableTo<MapFunction, UnknownFunction>>>,
  Expect<Should<'MapFunction type has correct signature', Equals<MapFunction, (input: number, inputMin: number, inputMax: number, outputMin: number, outputMax: number) => number>>>,
  Expect<Should<'MapFunction type with specific output type', Equals<MapFunction<string>, (input: number, inputMin: number, inputMax: number, outputMin: number, outputMax: number) => string>>>,
  Expect<Should<'MapFunction type with specific input & output type', Equals<MapFunction<string, string>, (input: string, inputMin: number, inputMax: number, outputMin: number, outputMax: number) => string>>>,

  Expect<Should<'CompiledMapFunction type is a function', AssignableTo<CompiledMapFunction, UnknownFunction>>>,
  Expect<Should<'CompiledMapFunction type has correct signature', AssignableTo<CompiledMapFunction, ConversionFunction<number, number>>>>,
  Expect<Should<'CompiledMapFunction type with specific output type', Equals<CompiledMapFunction<string>, ConversionFunction<number, string>>>>,
  Expect<Should<'CompiledMapFunction type with specific input & output type', Equals<CompiledMapFunction<string, string>, ConversionFunction<string, string>>>>,

  Expect<Should<'MapNumberFunction type is a function', AssignableTo<MapNumberFunction, UnknownFunction>>>,
  Expect<Should<'MapNumberFunction type has correct signature', Equals<MapNumberFunction, MapFunction>>>,

  Expect<Should<'CompiledMapNumberFunction type is a function', AssignableTo<CompiledMapNumberFunction, UnknownFunction>>>,
  Expect<Should<'CompiledMapNumberFunction type has correct signature', Equals<CompiledMapNumberFunction, CompiledMapFunction>>>,

  Expect<Should<'TransformFunction type is a function', AssignableTo<TransformFunction, UnknownFunction>>>,
  Expect<Should<'TransformFunction type has correct signature', Equals<TransformFunction, ConversionFunction<number, number>>>>,
  Expect<Should<'TransformFunction type with specific input type', Equals<TransformFunction<string>, ConversionFunction<string, number>>>>,
  Expect<Should<'TransformFunction type with specific input & output type', Equals<TransformFunction<string, string>, ConversionFunction<string, string>>>>,

  Expect<Should<'map function is a MapFunction', Equals<typeof map, MapFunction>>>,
  Expect<Should<'ceil function is a MapFunction', Equals<typeof ceil, MapFunction>>>,
  Expect<Should<'floor function is a MapFunction', Equals<typeof floor, MapFunction>>>,
  Expect<Should<'round function is a MapFunction', Equals<typeof round, MapFunction>>>,
  Expect<Should<'clamp function is a MapFunction', Equals<typeof clamp, MapFunction>>>,

  Expect<Should<'transformed function has correct signature', AssignableTo<typeof transformed, (map: MapFunction, transform: TransformFunction) => MapFunction>>>,
  Expect<Should<'compile function has correct signature', AssignableTo<typeof compile, (map: MapFunction, inputMin: number, inputMax: number, outputMin: number, outputMax: number) => CompiledMapFunction>>>,

  Expect<Should<'limit function has correct signature', Equals<typeof limit, typeof clamp>>>,
  Expect<Should<'transform function has correct signature', Equals<typeof transform, typeof transformed>>>,
  Expect<Should<'create function has correct signature', Equals<typeof create, typeof compile>>>,
  Expect<Should<'wrap function has correct signature', Equals<typeof wrap, typeof compile>>>,
]>;
