type ExtendsTernary<A, B, C, D> = A extends B ? C : D;

export type And<T extends readonly boolean[]> = ExtendsTernary<T[number], false, false, true>;
export type Not<T extends boolean> = ExtendsTernary<T, false, true, false>;

export type AssignableTo<A, B> = ExtendsTernary<A, B, true, false>;
export type Equals<A, B> = ExtendsTernary<A, B, ExtendsTernary<B, A, true, false>, false>;

type Passed<D extends string> = `PASSED: ${D}`;
type Failed<D extends string> = `FAILED: ${D}`;

export type Should<D extends string, T extends boolean> = T extends true ? Passed<D> : Failed<D>;

export type Expect<T extends Passed<string>> = T;
export type Assert<T extends ReadonlyArray<Passed<string> | Failed<string>>> = Extract<T[number], Failed<string>>;
