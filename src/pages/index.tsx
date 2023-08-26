import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

// [{date:  [
//            { activity: "scrolling through tiktok", mood: 2, message: "i am kenough" },
//            { activity: "seeing friends", mood: 2, message: "i am kenough"},
//          ]
// }]

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <div className="outline">
          <Link href="/home">Home</Link>
        </div>
        <div>
          <Link href="/about">About page</Link>
        </div>
        <div className="outline">
          <Link href="/moodForm">Mood Form Page</Link>
        </div>
        <div className="outline">
          <Link href="/calendar">Calendar Page</Link>
        </div>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main tw="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div tw="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 tw="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Create <span tw="text-[hsl(280,100%,70%)]">T3</span> App
          </h1>
          <div tw="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              tw="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://create.t3.gg/en/usage/first-steps"
              target="_blank"
            >
              <h3 tw="text-2xl font-bold">First Steps →</h3>
              <div tw="text-lg">
                Just the basics - Everything you need to know to set up your
                database and authentication.
              </div>
            </Link>
            <Link
              tw="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://create.t3.gg/en/introduction"
              target="_blank"
            >
              <h3 tw="text-2xl font-bold">Documentation →</h3>
              <div tw="text-lg">
                Learn more about Create T3 App, the libraries it uses, and how
                to deploy it.
              </div>
            </Link>
          </div>
          <p tw="text-2xl text-white">
            {hello.data ? hello.data.greeting : "Loading tRPC query..."}
          </p>
        </div>
      </main>
    </>
  );
}
