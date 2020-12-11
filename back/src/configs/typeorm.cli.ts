import { ConnectionOptions } from "typeorm";

const configsDev: ConnectionOptions = {
  type: "mysql",
  name: "default",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "gestion-evenement",
  entities: ["src/**/*.entity{.ts,.js}"],
  synchronize: false,
  migrations: ["src/migrations/*{.ts,.js}"],
  migrationsTableName: "migrations_typeorm",
  migrationsRun: true,
};

export = configsDev;
