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
    const res = result.rows;
    client.release();
    return res;
  } catch (error) {
    console.error("Error executing query:", error);
  }
}
// const query =
//   "select distinct source.name " +
//   "from crawler.origin " +
//   "join crawler.source on " +
//   "source.origin_id = origin.id " +
//   "order by origin.name ASC, source.name DESC;";
// queryDatabase(query)
//   .then((res) => console.log("res:", res))
//   .catch((error) => console.error("Error:", error))
//   .finally(() => pool.end());
