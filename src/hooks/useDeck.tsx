import { useState } from "react";

type DeckCard = {
  cardId: string;
  qty: number;
};
// map
type Deck = {
  deck: DeckCard[];
};

type UseDeckResult = {
  deck: Deck | undefined;
  addToDeck: (cardId: string) => void;
};

const useDeck = (): UseDeckResult => {
  const [deck, setDeck] = useState<Deck>();

  const addToDeck = (cardId: string): void => {
    setDeck((prevDeck) => {
  
      const inDeck = prevDeck?.deck.find(
        (card: { cardId: string }) => card.cardId === cardId
      );

      if (inDeck) {
        if (inDeck.qty < 4) {
          const updatedDeck = prevDeck?.deck.map(
            (card: { cardId: string; qty: number }) => {
              card.cardId === cardId ? { ...card, qty: card.qty++ } : card;
            }
          );
          return { ...prevDeck, deck: updatedDeck };
        }
        return prevDeck;
      } else {
        const newCard = { cardId, qty: 1 };
        const updatedDeck = prevDeck?.deck.concat(newCard);
        return { ...prevDeck, deck: updatedDeck };
      }
    });
  };

  return { deck, addToDeck };
};

export default useDeck;
