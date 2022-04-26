import "./Dropdown.css";
import React from "react";

export function Menu({ children, radio, className = "", ...params }) {
  return (
    <menu
      className={"Dropdown " + (radio ? "radio" : "") + className}
      {...params}
    >
      {children}
    </menu>
  );
}

export function Item({ children, selected, className = "", ...params }) {
  const classes = [selected ? "selected" : null, className]
    .filter((x) => x)
    .join(" ");
  const combined = classes ? { className: classes, ...params } : params;
  return <li {...combined}>{children}</li>;
}

export function Wrapper({
  children,
  element = "div",
  className = "",
  ...params
}) {
  return React.createElement(
    element,
    {
      className: "Dropdown Wrapper " + className,
      ...params,
    },
    children
  );
}

export default { Menu, Item, Wrapper };
