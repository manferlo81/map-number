import { map } from './map';
import { transformed } from './transform';

export const floor = transformed(map, Math.floor);
