import { map } from './map';
import { transformed } from './transform';

export const limit = transformed(
  map,
  (result, outMin, outMax) => {

    let boundMin = outMin;
    let boundMax = outMax;

    if (boundMax < boundMin) {
      const temp = boundMin;
      boundMin = boundMax;
      boundMax = temp;
    }

    return result > boundMax ? boundMax : result < boundMin ? boundMin : result;

  },
);
