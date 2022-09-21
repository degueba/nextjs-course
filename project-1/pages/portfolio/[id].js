import { useRouter } from "next/router";

function PortfolioDetailPage() {
  const { query } = useRouter();
  const { id } = query;

  console.log("id portfolio: ", id);

  // send a request to some backend server
  // to fetch the piece of data with an id of router.query.id

  return (
    <div>
      <h1>The detail portfolio</h1>
    </div>
  );
}

export default PortfolioDetailPage;
