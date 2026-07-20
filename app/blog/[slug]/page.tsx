export async function generateStaticParams() {
  return [{ slug: "post-1" }, { slug: "post-2" }];
}

export default function BlogPostPage() {
  return (
    <main>
      <h1>Blog post page (test build)</h1>
    </main>
  );
}
