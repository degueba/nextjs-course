import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();
  const { client_id } = router.query;

  function loadProjectHandler() {
    // load data ...
    router.push({
      pathname: `/clients/[client_id]/[client_project_id]`,
      query: {
        client_id,
        client_project_id: "project_id",
      },
    });
  }

  return (
    <div>
      <h1>The Projects of a {client_id}</h1>
      <button onClick={loadProjectHandler}>Load Project</button>
    </div>
  );
}

export default ClientProjectsPage;
