import { useRouter } from "next/router";

function BlogPage() {
  const { query } = useRouter();
  console.log("query: ", query);
  return (
    <div>
      <h1>This is the blog page</h1>
    </div>
  );
}

export default BlogPage;
