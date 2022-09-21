import Link from "next/link";

function ClientsPage() {
  const clients = [
    {
      id: "1",
      name: "Maximilian",
    },
    {
      id: "2",
      name: "Manuel",
    },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
            <Link
              href={{
                pathname: "/clients/[client_id]",
                query: {
                  client_id: client.id,
                },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
