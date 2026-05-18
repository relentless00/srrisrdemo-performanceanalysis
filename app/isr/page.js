export const revalidate = 10;

export default async function ISRPage() {

  const data = [
    'Static Item 1',
    'Static Item 2',
    'Static Item 3'
  ];

  return (
    <div>
      <h1>ISR Page</h1>

      {data.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}