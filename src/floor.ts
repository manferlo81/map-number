import { map } from './map';
import { mathFloor } from './math';
import { transformed } from './transform';

export const floor = transformed(map, mathFloor);
