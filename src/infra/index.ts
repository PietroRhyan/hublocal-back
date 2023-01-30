import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "database",
  port: 5432,
  username: "postgres",
  password: "hublocal",
  database: "HublocalDB",
  entities: ["./src/modules/**/entities/*.ts"],
  migrations: ["./src/infra/migrations/*.ts"],
});