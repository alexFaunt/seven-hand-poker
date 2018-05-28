/* eslint-disable no-process-env */
import convict from 'convict';

const config = {
  PORT: {
    doc: 'Port to expose app on',
    format: 'port',
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

// TODO - react server
// global.__ENV__ = ouput.getProperties();

export default ouput.getProperties();
