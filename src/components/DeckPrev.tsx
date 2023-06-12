import Image from "next/image";
import { MdOutlineMoreVert } from "react-icons/md";
import LawLeader from "../assets/OP01-002.png";
import Link from "next/link";
import { useState } from "react";

type Props = {
  deckId: string;
  deckName:string;
  leaderImage:string;
  color: string[];
  username: string;
}


const DeckPrev = () => {
  const [open, setOpen] = useState<boolean>(false);
  // 16 || 17
  const colors = ["red", "green"];
  return (
    <Link
      href="/"
      className="relative h-64 w-72 overflow-hidden rounded border border-gray-400 bg-gray-100 shadow-sm drop-shadow-lg transition hover:scale-105"
    >
      <div className="absolute left-0 top-10 z-[10] h-full w-full bg-gradient-to-b from-gray-50/0 via-gray-50 to-gray-50"></div>
      <Image
        src={LawLeader}
        height={500}
        width={500}
        alt="Deck Leader"
        className="absolute left-0 top-0 z-[0] w-full object-none object-bottom"
      />
      <div className="absolute left-0 top-0 z-10 h-full w-full">
        <div className="absolute bottom-0 flex h-1/3 w-full items-center justify-center gap-4 bg-gray-50 p-3">
          <div className="flex w-full flex-col">
            <div className="flex items-center justify-center gap-1">
              {colors.map((color) => {
                return (
                  <p
                    className={`bg-${color}-500 w-16 rounded text-center capitalize text-gray-50`}
                    key={color}
                  >
                    {color}
                  </p>
                );
              })}
            </div>
            <div className="flex items-center gap-2">
              <Image
                width={60}
                height={60}
                alt="Deck Creator"
                src={LawLeader}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="flex flex-1 flex-col">
                <p className="text-lg font-medium hover:underline">Law Deck</p>
                <p className="text-sm text-gray-500 hover:underline">
                  Username
                </p>
              </div>
              <div className="relative">
                <MdOutlineMoreVert
                  className="cursor-pointer"
                  size={24}
                  onClick={() => setOpen((prev) => !prev)}
                />
                {open ? (
                  <div className="absolute bottom-0 right-6 border bg-gray-50 px-6 py-4">
                    <ul className="flex flex-col gap-3">
                      <li className="border-b-2">Delete</li>
                      <li className="border-b-2">Share</li>
                    </ul>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default DeckPrev;
