import Link from 'next/link';

type Props = {
  promise: Promise<Post[]>;
};

export default async function UserPosts({promise}: Props) {
  const posts = await promise;

  const content = (
    <>
      <h1 className="text-4xl font-bold text-center">
        <Link href="..">Back</Link>
      </h1>
      <article className="flex flex-col items-center justify-center">
        {posts.map((post) => (
            <section key={post.id} className="flex flex-col items-center justify-center">
                <h3 className="text-4xl font-bold text-center">{post.title}</h3>
                <p className="text-xl">{post.body}</p>
            </section>
            ))}
            <hr/>
        </article>
    </>
  );

  return content;
}
