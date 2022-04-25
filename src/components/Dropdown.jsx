import "./Dropdown.css";
import React from "react";

export default function Dropdown({ children }) {
  return <menu className="Dropdown">{children}</menu>;
}

export function Item({ children, selected, className = "", ...params }) {
  const classes = [selected ? "selected" : "", className]
    .filter((x) => x)
    .join(" ");
  const combined = classes ? { className: classes, ...params } : params;
  return <li {...combined}>{children}</li>;
}

Dropdown.Item = Item;

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

Dropdown.Wrapper = Wrapper;
