import Head from "next/head";

export default function Home() {
  return (
    <div className="font-noto flex justify-center items-center min-h-screen">
      <Head>
        <title>درمانکده</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-6xl font-bold">به درمانکده خوش آمدید!</h1>
      </main>
    </div>
  );
}
