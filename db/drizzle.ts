import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "./schema";

const sql = neon(process.env.DATABASE_URL!);
// We can use "sql" connection object to interact with database using sql queries but if we want to use methods provided by drizzle we have to pass this object to "drizzle" function.
// BUT WHY ARE WE PASSING "schema" IN THERE ?
// The ! after process.env.DATABASE_URL is a TypeScript non-null assertion operator. It tells TypeScript that the value will definitely be there and should not be treated as null or undefined.

// @ts-ignore
// This comment tells the TypeScript compiler to ignore the next line for type checking. This might be used if there's a TypeScript type error that the developer knows is safe to ignore.
const db = drizzle(sql, { schema });

export default db;
