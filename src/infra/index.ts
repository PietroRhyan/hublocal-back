import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  database: "hublocal_db",
  username: "postgres",
  password: "hublocal123",
  entities: ["./src/modules/**/entities/*.ts"],
  migrations: ["./src/infra/migrations/*.ts"],
});