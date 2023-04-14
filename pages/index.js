import { supabase } from "../utils/supabase"
import Link from "next/link";

export default function Home({ test }) {
  console.log({ test });
  return (
    <main className="w-full max-w-3xl mx-auto my-16 px-2">
      {test?.map((test) => (
        <Link key={test.id} href={`/${test.id}`}>
          <a className="p-8 h-40 mb-4 rounded shadow text-xl flex">
            {test.description}
          </a>
          </Link>
      ))}
    </main>
  )
}

export const getStaticProps = async () => {
  const { data: test } = await supabase
    .from("test")
    .select("*")

  return {
    props: {
      test,
    },
  };
};