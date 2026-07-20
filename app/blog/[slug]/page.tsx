export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <main>
      <h1>Blog post page (test build)</h1>
      <p>{params?.slug}</p>
    </main>
  );
}
