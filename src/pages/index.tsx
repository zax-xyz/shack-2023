import Head from "next/head";
import GoogleLogo from "~/assets/g-logo.png";
import logo from "~/assets/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

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
        <Image className="h-36 w-36" src={logo} alt="Thrive" />
        <h1 tw="text-4xl">Welcome to Thrive</h1>
        <p>The app that makes room for your drive</p>
        <button
          tw="py-2 px-2 w-64 rounded border border-gray-300 bg-white shadow flex items-center justify-center gap-2 transition hover:bg-gray-50"
          onClick={() => void router.push("/home")}
        >
          <Image src={GoogleLogo} alt="Google" width={20} />
          Continue with Google
        </button>
      </main>
    </>
  );
}
