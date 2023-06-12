import type { PropsWithChildren } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
const General = (props: PropsWithChildren) => {
  return (
    <div className="bg-neutral-300 w-full min-h-screen h-full flex flex-col">
      <Navbar />
      {
        props.children
      }
      
    </div>
  );
};
export default General;
