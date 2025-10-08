import React from "react";

export const dynamicIconImports = {};

const MockIcon = (props) =>
  React.createElement("svg", {
    "data-testid": "mock-icon",
    ...props,
  });

export const ChevronDown = MockIcon;
export const Search = MockIcon;
export const User = MockIcon;
export const Menu = MockIcon;
export const X = MockIcon;
export const Plus = MockIcon;
export const Minus = MockIcon;
export const Edit = MockIcon;
export const Trash = MockIcon;
export const Save = MockIcon;
export const Cancel = MockIcon;

export default MockIcon;
