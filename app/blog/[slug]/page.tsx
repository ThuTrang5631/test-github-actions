export async function generateStaticParams() {
  return [{ id: "post-1" }, { id: "post-2" }];
}

export default function BlogPostPage() {
  return (
    <main>
      <h1>Blog post page (test build)</h1>
    </main>
  );
}
