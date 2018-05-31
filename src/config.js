// @flow
/* eslint-disable no-process-env */
import convict from 'convict';

export type Config = {
  NODE_ENV: 'development' | 'production',
  PORT: string,
}

const config = {
  NODE_ENV: {
    doc: '',
    format: ['production', 'development'],
    default: null,
  },
  PORT: {
    doc: 'Port to expose app on',
    format: 'port',
    default: null,
  },
  DATABASE_URL: {
    doc: 'Url to connect to database',
    format: String,
    default: null,
  },
};

const withEnv = Object.keys(config).reduce((acc, key) => ({
  ...acc,
  [key]: {
    ...config[key],
    env: key,
  },
}), {});

const ouput = convict(withEnv);
ouput.validate({ allowed: 'strict' });

export default ouput.getProperties();
