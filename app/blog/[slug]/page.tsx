export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <main>
      <h1>Blog post page</h1>
      <p>{params?.slug}</p>
    </main>
  );
}
