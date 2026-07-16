import Link from "next/link";
import Button from "./components/button";

export default function Home() {
  return (
    <main>
      <h1>Hellow Next js</h1>
      <Link href={'/blogs'}>Blogs</Link>
      <Button />
    </main>
  );
}
