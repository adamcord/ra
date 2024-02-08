import { unstable_noStore as noStore } from "next/cache";

import { api } from "~/trpc/server";
import { CreatePost } from "./_components/create-post";
import { Navbar } from "./_components/navbar";

export default async function Home() {
  noStore();

  const hello = await api.post.hello.query({ text: "from tRPC" });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#0038A8] to-[#15162c] text-white">
      <div className="container relative">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <CreatePost />
            <div className="flex flex-col items-center gap-2">
              <p className="text-2xl text-white">
                {hello ? hello.greeting : "Loading tRPC query..."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
