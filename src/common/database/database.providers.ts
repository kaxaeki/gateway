/* eslint-disable @typescript-eslint/no-var-requires */
import { DataSource, DataSourceOptions } from 'typeorm';
import { getConfig } from 'src/utils/index';
import { User } from '@/user/user.mongo.entity';
const path = require('path');

// 设置数据库类型
const databaseType: DataSourceOptions['type'] = 'mongodb';
const { MONGODB_CONFIG } = getConfig();
console.log(path.join(__dirname, '../**/user.mongo.entity.ts'));

const MONGODB_DATABASE_CONFIG = {
  ...MONGODB_CONFIG,
  type: databaseType,
  entities: [
    // path.join(
    //   __dirname,
    //   `../../**/*.${MONGODB_CONFIG.entities}.entity{.ts,.js}`,
    // ),
    User,
    // path.join(__dirname, `../**/*.${MONGODB_CONFIG.entities}.entity.ts`),
  ],
};

const MONGODB_DATA_SOURCE = new DataSource(MONGODB_DATABASE_CONFIG);

// 数据库注入
export const DatabaseProviders = [
  {
    provide: 'MONGODB_DATA_SOURCE',
    useFactory: async () => {
      await MONGODB_DATA_SOURCE.initialize();
      // console.log(MONGODB_DATA_SOURCE);
      return MONGODB_DATA_SOURCE;
    },
  },
];
