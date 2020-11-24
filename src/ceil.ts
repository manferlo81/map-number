import { map } from './map';
import { transformed } from './transform';

export const ceil = transformed(map, Math.ceil);
