import { Pool } from "pg";

const pool = new Pool({
  user: "admin",
  password: "Janbox@2022",
  host: "10.29.70.101",
  port: 5432, // Default PostgreSQL port is 5432
  database: "janbox_user_management",
});
export async function queryDatabase(query) {
  try {
    const client = await pool.connect();
    const result = await client.query(query);
    const workspaces = result.rows;
    client.release();
    return workspaces;
  } catch (error) {
    console.error("Error executing query:", error);
  }
}
// const query = "SELECT * FROM user_management.workspaces";
// queryDatabase(query)
//   .then((workspaces) => console.log("Workspaces:", workspaces))
//   .catch((error) => console.error("Error:", error))
//   .finally(() => pool.end());
