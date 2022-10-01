import React from "react";

interface ListProps<T> {
  items: T[];
  // eslint-disable-next-line no-unused-vars
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return <>{items.map(renderItem)}</>;
}

export default List;
