import { supabase } from "../utils/supabase"

export default function Home({ lesson }) {
  console.log({ lesson });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {lesson?.map((lesson) => (
        <p key={lesson.id}>{lesson.title}</p>
      ))}
    </main>
  )
}

export const getStaticProps = async () => {
  const { data: lesson } = await supabase
    .from("lesson")
    .select("*")

  return {
    props: {
      lesson,
    },
  };
};