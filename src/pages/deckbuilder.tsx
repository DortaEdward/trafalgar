import DeckContainer from "../components/DeckBuilder/DeckContainer";
import SearchContainer from "../components/DeckBuilder/SearchContainer";
const DeckBuilder = () => {
  const deck = {
    // 50 cards
    // 10 don
    // 1 leader
  }

    return (
      <div className="relative flex w-full gap-2 px-4 overflow-hidden">
        {/* Left */}
        <DeckContainer />
        {/* Right */}
        <SearchContainer />
      </div>
  );
};

export default DeckBuilder;
