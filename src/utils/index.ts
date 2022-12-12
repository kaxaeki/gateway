/* eslint-disable @typescript-eslint/no-var-requires */
import { parse } from 'yaml';
const path = require('path');
const fs = require('fs');

// 获取项目运行环境
export const getEnv = () => {
  return process.env.RUNNING_ENV;
};

// 读取项目配置
export const getConfig = (type?: string) => {
  const environment = getEnv();
  const yamlPath = path.join(process.cwd(), `./.config/.${environment}.yaml`);
  const file = fs.readFileSync(yamlPath, 'utf8');
  const config = parse(file);
  if (type) {
    return config[type];
  }
  return config;
};

export const getCode = () => {
  const data1 = path.join(process.cwd(), `./.config/code.text`);

  const data = fs.readFileSync(data1, 'utf8');
  // const list = xlsx.parse(data1);
  // console.log(data);
};
