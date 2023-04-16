import React from "react";
import { pageLinks } from "../data";
import Pagelink from "./Pagelink";

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id={parentClass}>
      {pageLinks.map((link) => {
        return <Pagelink link={link} itemClass={itemClass} />;
      })}
    </ul>
  );
};

export default PageLinks;
