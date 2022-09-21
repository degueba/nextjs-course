import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link href="/about">About</Link>
        <Link href="/portfolio">Portfolio</Link>
      </nav>
    </div>
  );
}

export default HomePage;
