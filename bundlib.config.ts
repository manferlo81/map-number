import { BundlibConfig } from 'bundlib';

const config: BundlibConfig = {
  'name': 'mapNum',
  'min': [
    'api',
    '!main',
  ],
  'project': 'tsconfig-build.json',
};

export default config;
