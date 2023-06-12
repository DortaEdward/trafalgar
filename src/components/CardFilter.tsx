import { useState } from "react";
import { sets, attributes } from "../assets/data";
const CardFilter = () => {
  const [filterQuery, setFilterQuery] = useState({
    color: "none",
    cardType: "none",
    cost: "none",
    counterPower: "none",
    life: "none",
    attributes: "none",
    set: "none",
  });
  return (
    <div className="mb-8 flex w-full flex-col items-center">
      <p className="my-2 text-2xl font-semibold">Filters</p>

      <div className="flex w-full flex-col items-center justify-center gap-2">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <div>
            <p>Color</p>
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
              <option value="none">None</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="purple">Purple</option>
              <option value="black">Black</option>
              <option value="yellow">Yellow</option>
            </select>
          </div>
          <div>
            <p>Card Type</p>
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
              <option value="none">None</option>
              <option value="LEADER">Leader</option>
              <option value="CHARACTER">Character</option>
              <option value="EVENT">Event</option>
              <option value="STAGE">Stage</option>
              <option value="DON">Don</option>
            </select>
          </div>
          <div>
            <p>Cost</p>
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
              <option value={"0"}>None</option>
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
          </div>
          <div>
            <p>CP</p>
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
              <option value={"none"}>None</option>
              <option value={"1000"}>1000</option>
              <option value={"2000"}>2000</option>
            </select>
          </div>
          <div>
            <p>Life</p>
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
              <option value={"none"}>None</option>
              <option value={"4"}>4</option>
              <option value={"5"}>5</option>
            </select>
          </div>
        </div>
        <div className="flex gap-2">
          <div>
            <p>Attributes</p>
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
              <option value="none">None</option>
              {attributes.map((attribute) => {
                return (
                  <option key={attribute} value={attribute}>
                    {attribute}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <p>Set</p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFilter;
