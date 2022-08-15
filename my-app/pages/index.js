import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>The cool website</title>
        <meta name="description" content="The coolest website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <p className="text-center h1 mt-2 fw-bold">Welcome to my cool website</p>
      <p className="text-center h4 mt-5">you just got your ip logged</p>
      <p className="text-center fw-light">(joke)</p>
    </>
  );
}
