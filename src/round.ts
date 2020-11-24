import { map } from './map';
import { transformed } from './transform';

export const round = transformed(map, Math.round);
