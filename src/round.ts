import { map } from './map';
import { mathRound } from './math';
import { transformed } from './transform';

export const round = transformed(map, mathRound);
