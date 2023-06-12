import Image from "next/image";
import Traf from "../../assets/OP01-002.png";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const DeckContainer = () => {
  return (
    <>
      <div
        id="left"
        className="max-w-96 hidden  h-[calc(100vh-64px)] w-1/3 flex-col overflow-auto bg-blue-300 p-3 md:flex"
      >
        <div className="" id="deck_card_container">
          <div>
            <h1>Deck</h1>
            <p>Deck Count: 01</p>
          </div>
          <div id="deck_card_el_leader">
            <p className="text-2xl">Leader</p>
            <div
              className="h-18 flex w-full items-center justify-between bg-green-400 px-2 py-2"
              id="leader"
            >
              <div className="flex items-center gap-2">
                {/* Image */}
                <Image
                  src={Traf}
                  alt="Traf"
                  className="aspect-auto h-full w-14"
                  width={100}
                  height={100}
                />
                {/* Name */}
                <div>
                  <p className="text-lg">Trafalgar Law</p>
                  <p>OP01-002</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <MdKeyboardArrowUp size={28} className="cursor-pointer" />
                <div className="bg-gray-50 px-2 py-1 outline outline-gray-50">
                  1
                </div>
                <MdKeyboardArrowDown size={28} className="cursor-pointer" />
              </div>
            </div>
          </div>
          <div id="deck_card_el">
            <p className="text-2xl">Cards</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeckContainer;
