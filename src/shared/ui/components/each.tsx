import React, { Children } from "react";

type TEach<T> = {
  items: Array<T>;
  render: (item: T, index: number, list: Array<T>) => React.ReactNode;
};

function Each<T>({ items, render }: TEach<T>) {
  if (!items || !Array.isArray(items) || items.length === 0) return null;
  return Children.toArray(items.map(render));
}

export default Each;
