/* eslint-disable @typescript-eslint/no-var-requires */
import { DataSource, DataSourceOptions } from 'typeorm';
import { getConfig } from 'src/utils/index';
const path = require('path');

const databaseType = 'mongodb';
const { MONGODB_CONFIG } = getConfig();

const MONGODB_DATABASE_CONFIG = {
  ...MONGODB_CONFIG,
  type: databaseType,
  entities: [
    path.join(__dirname, `../../**/*.${MONGODB_CONFIG.entities}.entity{.ts}`),
  ],
};

const MONGODB_DATA_SOURCE = new DataSource(MONGODB_DATABASE_CONFIG);

// 数据库注入
export const DatabaseProviders = [
  {
    provide: 'MONGODB_DATA_SOURCE',
    useFactory: async () => {
      await MONGODB_DATA_SOURCE.initialize();
      return MONGODB_DATA_SOURCE;
    },
  },
];