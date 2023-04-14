import { supabase } from "../utils/supabase"

export default function Home({ lessons }) {
  console.log({ lessons });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {lessons?.map((lesson) => (
        <p key={lesson.id}>{lesson.title}</p>
      ))}
    </main>
  )
}

export const getStaticProps = async () => {
  const { data: lessons, error } = await supabase
    .from("lesson")
    .select("*")

  return {
    props: {
      lessons,
    },
  };
};