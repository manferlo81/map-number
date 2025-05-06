import { config } from 'bundlib';

export default config({
  esModule: true,
  interop: true,
  name: 'mapNum',
  min: ['browser', 'module'],
  project: './tsconfig.build.json',
});
