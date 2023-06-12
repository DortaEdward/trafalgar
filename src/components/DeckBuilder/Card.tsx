import type { StaticImageData } from "next/image";
import Image from "next/image";
import CardViewer from "./CardViewer";

type Props = {
  width: number;
  height: number;
  setIsDisplaying: any;
  setActiveCard : any;
  card:any;
};

const Card = ({width, height, setIsDisplaying, setActiveCard, card}: Props) => {
  const handleClick = () => {
    setActiveCard(card)
    setIsDisplaying(true)
  }
  
  return (
    <Image
      src={`/images/${card.imageUrl}`}
      alt={`Image of ${card.cardId}`}
      width={width}
      height={height}
      className={`h-[${height}] w-[${width}] rounded aspect-auto`}
      onClick={handleClick}
    />
  );
};

export default Card;
