import { MdMenu, MdExpandMore } from "react-icons/md";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const { data: session, status } = useSession();
  const open = false;
  return (
    <div className="relative flex h-16 w-full items-center justify-center overflow-hidden bg-slate-800 text-gray-100">
      <div className="relative flex h-full w-full items-center justify-between px-16">
        {open ? (
          <div className="absolute left-0 top-0 h-screen w-screen bg-black/40">
            <div className="h-full w-64 bg-slate-700">
              <ul className="flex flex-col items-center gap-8 pt-10">
                <li className="text-2xl font-bold">Home</li>
                <li className="text-2xl font-bold">Decks</li>
                <li className="text-2xl font-bold">Cards</li>
              </ul>
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="order-1 md:order-2">
          <div className="flex md:hidden">
            <MdMenu
              size={40}
              className="cursor-pointer rounded-md p-1 hover:bg-slate-700"
            />
          </div>
          <div className="hidden md:flex">
            <ul className="flex gap-4">
              <li>
                <Link
                  href="/database"
                  className="border-sky-700 py-[1rem] text-lg duration-100 ease-in-out hover:border-b-4"
                >
                  Database
                </Link>
              </li>
              <li>
                <Link
                  href="/deckbuilder"
                  className="border-sky-700 py-[1rem] text-lg duration-100 ease-in-out hover:border-b-4"
                >
                  Deck Builder
                </Link>
              </li>
              <li>
                <Link
                  href="/decks"
                  className="border-sky-700 py-[1rem] text-lg duration-100 ease-in-out hover:border-b-4"
                >
                  Decks
                </Link>
              </li>
              <li>
                <Link
                  href="/donation"
                  className="border-sky-700 py-[1rem] text-lg duration-100 ease-in-out hover:border-b-4"
                >
                  Donation
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Link href="/" className="order-2 text-2xl md:order-1">
          Traffy Builder
        </Link>
        <div
          className={`order-3 ${
            status === "loading" ? "invisible" : "visible"
          }`}
        >
          {session ? (
            <div className="relative">
              <div className="flex cursor-pointer items-center gap-1 rounded-md py-1 pl-2 hover:bg-slate-700">
                <Image
                  src={session.user?.image as string}
                  width={100}
                  height={100}
                  className="h-10 w-10 rounded-full"
                  alt={`Image of ${session.user?.name}`}
                />
                <MdExpandMore size={28} className="hidden md:block" />
              </div>
              <div></div>
            </div>
          ) : (
            <button
              type="button"
              className="rounded-md bg-sky-600 px-2 py-1 font-bold underline-offset-8 duration-100 ease-in-out hover:underline"
              onClick={() => signIn()}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
