import { useState } from "react";
import type { Card } from "@prisma/client";
import Image from "next/image";

type Props = {
  card: Card | null;
  setIsDisplaying: any;
  setActiveCard: any;
};

const CardViewer = ({ card, setIsDisplaying, setActiveCard }: Props) => {
  const handleClick = () => {
    setActiveCard(null);
    setIsDisplaying(false);
  };

  return (
    <div className="absolute left-0 top-0 flex h-screen w-screen justify-center bg-neutral-900/20">
      <div className="relative h-[600px] w-[800px] mt-16">
        <div className="w-full cursor-pointer items-end justify-end self-end bg-gray-100 px-4 py-2">
          <button onClick={handleClick}>X</button>
        </div>
        <div className="h-full w-full bg-gray-200 p-2 flex flex-col gap-2">
          <div className="flex h-2/3 bg-gray-100 p-3 rounded">
            <div className="w-1/3">
              <div className="flex flex-col gap-2">
                <div className=" leading-3">
                  <p className="font-semibold">Name</p>
                  <p className="text-base font-semibold">{card?.name}</p>
                </div>
                <div className="leading-3">
                  <p className="font-semibold">Cost</p>
                  <p className="text-base font-semibold">{card?.cost}</p>
                </div>

                <div className="leading-3">
                  <p className="font-semibold">Power</p>
                  <p className="text-base font-semibold">{card?.power}</p>
                </div>

                <div className="leading-3">
                  <p className="font-semibold">Counter Power</p>
                  <p className="text-base font-semibold">{card?.counterPower}</p>
                </div>

                <div className="leading-3">
                  <p className="font-semibold">Card Type</p>
                  <p className="font-semibold">{card?.type}</p>
                </div>

                <div className="leading-4">
                  <p className="font-semibold">Traits</p>
                  <p className="text-sm font-bold">
                    {card?.traits.map((trait) => {
                      return (
                        <p key={trait} className="italic">
                          {trait}
                        </p>
                      );
                    })}
                  </p>
                </div>

                <div className="leading-3">
                  <p className="font-semibold">Attribute</p>
                  <p className="text-lg font-semibold">{card?.attribute}</p>
                </div>
              </div>
            </div>
            <div className="flex  w-2/3 items-center justify-center py-2">
              <Image
                src={`/images/${card?.imageUrl}`}
                alt={`Image of ${card?.gameId}`}
                width={233}
                height={325}
                className="h-full max-h-[390px] w-full max-w-[270px] rounded"
              />
            </div>
          </div>
          <div className="h-1/3 rounded flex flex-col justify-between p-1 bg-gray-100">
            <div className="">
                <p>Effect</p>
                <p className="text-sm font-medium">{card?.effect}</p>
            </div>
            <div className="leading-4">
                <p>Card Id</p>
                <p>{card?.cardId}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardViewer;

//w-[270px] h-[390px] rounded
