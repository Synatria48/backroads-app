import React from "react";

const Pagelink = ({ link, itemClass }) => {
  return (
    <li>
      <a href={link.href} className={itemClass}>
        {link.name}
      </a>
    </li>
  );
};

export default Pagelink;
