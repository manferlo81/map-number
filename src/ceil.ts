import { map } from './map';
import { mathCeil } from './math';
import { transformed } from './transform';

export const ceil = transformed(map, mathCeil);
