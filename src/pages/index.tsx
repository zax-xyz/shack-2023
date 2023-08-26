import Head from "next/head";
import { api } from "~/utils/api";
import GoogleLogo from "~/assets/g-logo.png";
import Image from "next/image";

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
        <title>Thrive</title>
        <meta
          name="description"
          content="The app that makes room for your drive"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main tw="min-h-screen flex flex-col items-center justify-center gap-4">
        <img
          className="h-36"
          src="https://static.thenounproject.com/png/335121-200.png"
          alt="Home"
        />
        <h1 tw="text-4xl">Welcome to Thrive</h1>
        <p>The app that makes room for your drive</p>
        <button tw="py-2 px-2 w-64 rounded border border-gray-300 bg-white shadow flex items-center justify-center gap-2 transition hover:bg-gray-50">
          <Image src={GoogleLogo} alt="Google" width={20} />
          Continue with Google
        </button>
      </main>
    </>
  );
}
