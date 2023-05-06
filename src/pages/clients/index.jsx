import Link from "next/link";

export default function ClientPage() {
  const clients = [
    { id: "m1", name: "Enes" },
    { id: "m2", name: "Kaplan" },
  ];

  return (
    <>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => {
          return (
            <li key={client.id}>
              <Link href={`/clients/${client.id}`}>{client.name}</Link>;
            </li>
          );
        })}
      </ul>
    </>
  );
}
