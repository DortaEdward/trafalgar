import Link from "next/link";
import { MdLaunch } from "react-icons/md";
type Props = {
  href: string;
  title: string;
};

const ShowMoreDeck = ({ href, title }: Props) => {
  return (
    <Link
      href={href}
      className="relative flex h-64 w-72 flex-col items-center justify-center gap-4 overflow-hidden rounded border border-gray-400 bg-gray-100 shadow-sm drop-shadow-lg transition hover:scale-105"
    >
      <div className="flex flex-col items-center">
        <p className="text-2xl">See More</p>
        <p className="text-2xl">{`${title} Decks`}</p>
      </div>
      <MdLaunch size={48} />
    </Link>
  );
};

export default ShowMoreDeck;
