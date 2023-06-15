import CardComponent from "./Card";
import type { Card } from "@prisma/client";
import { sets, attributes } from "../../assets/data";
import { useState } from "react";
import { trpc } from "../../utils/trpc";
import CardViewer from "./CardViewer";

const SearchContainer = () => {
  
  const { data, isLoading } = trpc.card.getCards.useQuery();
  const [isDisplaying, setIsDisplaying] = useState<boolean>(false);
  const [activeCard, setActiveCard] = useState<Card | null>(null);
  
  return (
    <>
      <div
        id="right"
        className="flex h-[calc(100vh-64px)] w-full flex-col items-center gap-4 p-4 md:w-2/3"
      >
        <div className="flex h-full w-full flex-col gap-1 rounded bg-neutral-100 p-2 shadow-lg">
          <SearchForm />
          <div className="flex h-5/6 w-full flex-wrap gap-[2px] overflow-auto rounded-md bg-neutral-200 px-1 py-2 sm:justify-center md:h-3/4">
            {isLoading ? (
              <>Loading</>
            ) : (
              <div className="grid grid-cols-4 flex-wrap content-start justify-center gap-1 md:flex">
                {data?.cards.map((card: Card) => {
                  return (
                    <>
                      <CardComponent
                        setIsDisplaying={setIsDisplaying}
                        setActiveCard={setActiveCard}
                        card={card}
                        width={100}
                        height={150}
                        key={card.id}
                      />

                      {isDisplaying && activeCard ? (
                        <CardViewer
                          card={activeCard}
                          setIsDisplaying={setIsDisplaying}
                          setActiveCard={setActiveCard}
                        />
                      ) : (
                        <></>
                      )}
                    </>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchContainer;

const SearchForm = () => {
  const [filterQuery, setFilterQuery] = useState({
    color: "none",
    cardType: "none",
    cost: "none",
    counterPower: "none",
    life: "none",
    attributes: "none",
    set: "none",
  });

  function resetSearch() {
    setFilterQuery({
      color: "none",
      cardType: "none",
      cost: "none",
      counterPower: "none",
      life: "none",
      attributes: "none",
      set: "none",
    });
  }

  return (
    <div className="my-2 flex w-full flex-col items-center justify-center gap-1 rounded-md bg-neutral-200 md:h-1/5">
      <div className="flex flex-wrap items-center justify-center gap-2 py-2">
        <select
          value={filterQuery.color}
          onChange={(e) =>
            setFilterQuery({
              ...filterQuery,
              color: e.target.value,
            })
          }
          className="w-28 rounded px-1 py-2"
          name="color"
        >
          <option value="none">Color</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="purple">Purple</option>
          <option value="black">Black</option>
          <option value="yellow">Yellow</option>
        </select>

        <select
          value={filterQuery.cardType}
          onChange={(e) =>
            setFilterQuery({
              ...filterQuery,
              cardType: e.target.value,
            })
          }
          className="w-28 rounded px-1 py-2"
          name="cardType"
        >
          <option value="none">Card Type</option>
          <option value="LEADER">Leader</option>
          <option value="CHARACTER">Character</option>
          <option value="EVENT">Event</option>
          <option value="STAGE">Stage</option>
          <option value="DON">Don</option>
        </select>

        <select
          value={filterQuery.cost}
          onChange={(e) =>
            setFilterQuery({
              ...filterQuery,
              cost: e.target.value,
            })
          }
          className="w-28 rounded px-1 py-2"
          name="cost"
        >
          <option value={"0"}>Cost</option>
          <option value={"1"}>1</option>
          <option value={"2"}>2</option>
          <option value={"3"}>3</option>
          <option value={"4"}>4</option>
          <option value={"5"}>5</option>
          <option value={"6"}>6</option>
          <option value={"7"}>7</option>
          <option value={"8"}>8</option>
          <option value={"9"}>9</option>
          <option value={"10"}>10</option>
        </select>

        <select
          value={filterQuery.counterPower}
          onChange={(e) =>
            setFilterQuery({
              ...filterQuery,
              counterPower: e.target.value,
            })
          }
          className="w-28 rounded px-1 py-2"
          name="cost"
        >
          <option value={"none"}>Counter</option>
          <option value={"1000"}>1000</option>
          <option value={"2000"}>2000</option>
        </select>

        <select
          value={filterQuery.life}
          onChange={(e) =>
            setFilterQuery({
              ...filterQuery,
              life: e.target.value,
            })
          }
          className="w-28 rounded px-1 py-2"
          name="cost"
        >
          <option value={"none"}>Life</option>
          <option value={"4"}>4</option>
          <option value={"5"}>5</option>
        </select>

        <select
          value={filterQuery.attributes}
          onChange={(e) =>
            setFilterQuery({
              ...filterQuery,
              attributes: e.target.value,
            })
          }
          className="w-32 rounded px-1 py-2"
          name="cost"
        >
          <option value="none">Attribute</option>
          {attributes.map((attribute) => {
            return (
              <option key={attribute} value={attribute}>
                {attribute}
              </option>
            );
          })}
        </select>
        <select
          value={filterQuery.set}
          onChange={(e) =>
            setFilterQuery({
              ...filterQuery,
              set: e.target.value,
            })
          }
          className="rounded px-1 py-2"
          name="cost"
        >
          <option value="none">None</option>
          {sets.map((set) => {
            return (
              <option key={set} value={set}>
                {set}
              </option>
            );
          })}
        </select>
        <button
          onClick={resetSearch}
          className="rounded bg-red-500 px-4 py-2 text-gray-50"
        >
          Reset
        </button>
      </div>
    </div>
  );
};
