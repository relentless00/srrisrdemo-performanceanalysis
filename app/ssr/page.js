import mysql from 'mysql2/promise';

export default async function SSRPage() {

  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nextdemo',
    port: '3307',
  });

  const [rows] = await connection.execute('SELECT * FROM products');

  await connection.end();

  return (
    <div>
      <h1>SSR Page</h1>

      {rows.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}