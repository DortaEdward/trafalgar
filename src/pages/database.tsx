import Image from "next/image";
import { trpc } from "../utils/trpc";
import CardFilter from "../components/CardFilter";

const DataBase = () => {
  const { isLoading, data } = trpc.card.getCards.useQuery();
  return (
    <div className="relative flex w-full flex-col items-center bg-gray-300">
      <h1 className=" mb-2 mt-8 text-4xl font-bold">Card Database</h1>
      <div className="container flex max-w-[1280] flex-col items-center">
        <div className="flex w-full flex-col items-center justify-center">
          <form className="my-8 flex w-full flex-col items-center">
            <input
              type="text"
              placeholder="Search"
              className="w-2/3 px-4 py-2"
            />
          </form>
          <CardFilter />
        </div>
        {isLoading ? <>Loading...</> : <></>}
        {data && (
          <ul className="flex h-full flex-wrap items-center justify-center gap-1 bg-gray-300">
            {data.cards?.map((card) => {
              return (
                <li className="flex h-full items-center" key={card.id}>
                  <Image
                    priority={false}
                    src={`/images/${card.imageUrl}`}
                    height={300}
                    width={300}
                    alt="Card Image"
                    className="h-[320px] w-[220px] rounded-lg"
                  />
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="mb-10"></div>
    </div>
  );
};

export default DataBase;
