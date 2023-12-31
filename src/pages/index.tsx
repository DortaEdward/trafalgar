import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Navbar from "../components/navbar";
import DeckPrev from "../components/DeckPrev";
import { trpc } from "../utils/trpc";
import ShowMoreDecks from "../components/ShowMoreDecks";

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  // const createCards = trpc.card.seedCards.useMutation();
  const videoAspectRatio = "16:9";

  return (
    <>
      <Head>
        <title>Traffy Builder</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col">
        <div className="flex h-48 w-full flex-col items-center justify-center gap-3">
          <div className="flex items-center">
            <input
              type="text"
              className="w-80 rounded-sm p-3 drop-shadow-lg sm:w-[500px]"
              placeholder="Search"
            />
          </div>
          <div className="flex gap-2">
            <Link
              href="/deckbuilder"
              className="rounded-sm bg-sky-700 p-3 font-bold text-gray-100 drop-shadow-lg hover:bg-sky-600"
            >
              Deck Builder
            </Link>
            <Link
              href="/decks"
              className="rounded-sm bg-gray-200 p-3 font-bold text-sky-700 drop-shadow-lg hover:bg-gray-100"
            >
              View Decks
            </Link>
          </div>
        </div>
        <div
          id="recent-container"
          className="container mx-auto flex max-w-[1280px] flex-col gap-4"
        >
          <p className="mx-auto mb-3 mt-6 text-4xl font-semibold">Recent</p>
          <div
            id="content"
            className="mb-10 flex w-full flex-wrap items-center justify-center gap-4"
          >
            <DeckPrev />
            <DeckPrev />
            <DeckPrev />
            <DeckPrev />
            <DeckPrev />
            <DeckPrev />
            <DeckPrev />
            <ShowMoreDecks href={"/decks"} title={"Recent"} />
          </div>
        </div>
        <div
          id="popular-container"
          className="container mx-auto mb-8 flex max-w-[1280px] flex-col gap-10"
        >
          <p className="mx-auto mb-3 mt-6 text-4xl font-semibold">
            Popular Deck
          </p>
          <div
            id="content"
            className="mb-10 flex w-full flex-wrap items-center justify-center gap-4"
          >
            <DeckPrev />
            <DeckPrev />
            <DeckPrev />
            <DeckPrev />
            <DeckPrev />
            <DeckPrev />
            <DeckPrev />
            <ShowMoreDecks href={"/decks?filter=popular"} title={"Popular"} />
          </div>
        </div>
      </main>

    </>
  );
};
export default Home;
