import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 6500,
  username: "postgres",
  password: "hublocal",
  database: "HublocalDB",
  entities: ["./src/modules/**/entities/*.ts"],
  migrations: ["./src/infra/migrations/*.ts"],
});