import { DataSource, DataSourceOptions } from 'typeorm'
import { MYSQL_CONFIG } from '.'
import { Font as FontEntity } from '../entities/FontEntity'

// 设置数据库类型
const databaseType: DataSourceOptions['type'] = 'mysql'

const MYSQL_DATABASE_CONFIG: DataSourceOptions = {
  ...MYSQL_CONFIG,
  type: databaseType,
  dateStrings: true,
  entities: [FontEntity],
}

export const MySqlDataSource = new DataSource(MYSQL_DATABASE_CONFIG)
