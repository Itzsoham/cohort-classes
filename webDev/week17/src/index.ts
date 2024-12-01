import { Client } from "pg";

const pgClient = new Client(
  "postgresql://practice_owner:dcuXOH98LGJU@ep-royal-cloud-a1ka4b5s.ap-southeast-1.aws.neon.tech/practice?sslmode=require"
);

const pgClient2 = new Client({
  user: "practice_owner",
  host: "ep-royal-cloud-a1ka4b5s.ap-southeast-1.aws.neon.tech",
  database: "practice",
  password: "dcuXOH98LGJU",
  port: 5432,
});

async function main() {
  pgClient.connect();
  const res = await pgClient.query("SELECT * FROM users");
  console.log(res.rows);
  // learn other my own by using in projects
}

main();
