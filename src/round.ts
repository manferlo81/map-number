import { map } from './map';
import { transform } from './transform';

export const round = transform(map, Math.round);
