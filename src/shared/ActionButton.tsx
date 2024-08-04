import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-full border-[2px] border-gray-50 bg-white text-gray-50 px-16 py-3 hover:bg-gray-50 hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.OurServices)}
      href={`#${SelectedPage.OurServices}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;