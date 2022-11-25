/* eslint-disable @typescript-eslint/no-var-requires */
import { parse } from 'yaml';
const fs = require('fs');
const path = require('path');

export const getEnv = () => {
  const env = process.env.RUNNING_ENV || 'dev';
  return env;
};

export const getConfig = () => {
  const environment = getEnv();
  const yamlPath = path.join(process.cwd(), `./.config/.${environment}.yaml`);
  const file = fs.readFileSync(yamlPath, 'utf8');
  const config = parse(file);
  console.log(config);
  return config;
};
