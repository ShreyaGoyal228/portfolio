import { api } from "@/trpc/server";

export default async function Home() {
  void api.post.getLatest.prefetch();

  return <div className="text-blue">Hello</div>;
}
