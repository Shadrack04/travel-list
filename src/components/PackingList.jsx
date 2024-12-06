import React, { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function PackingList({ items, deleteItem, onCheck, onClear }) {
  const [sortItem, setSortItem] = useState("input");
  let sortedItems;

  if (sortItem === "input") sortedItems = items;
  if (sortItem === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortItem === "pack")
    sortedItems = items.slice().sort((a, b) => Number(a.isPacked - b.isPacked));

  return (
    <div className=" row-span-6 bg-[#5a3e2b] text-[#ffebb3] py-8 flex flex-col justify-between items-center gap-4">
      <ul className=" list-none w-[80%] overflow-scroll sm:overflow-auto grid grid-cols-auto-fit-minmax gap-4">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            checkPacked={onCheck}
          />
        ))}
      </ul>

      <Sort sortItem={sortItem} setSortItem={setSortItem} onClear={onClear} />
    </div>
  );
}

function Item({ item, deleteItem, checkPacked }) {
  return (
    <>
      <li className=" flex items-center gap-4">
        <input
          value={item.isPacked}
          onClick={() => checkPacked(item.id)}
          type="checkbox"
          className=" accent-[#e5771f]"
        />
        <span style={item.isPacked ? { textDecoration: "line-through" } : {}}>
          <span>{item.quantity} </span>
          {item.description}
        </span>
        <button onClick={() => deleteItem(item.id)} className=" cursor-pointer">
          ❌
        </button>
      </li>
    </>
  );
}

function Sort({ sortItem, setSortItem, onClear }) {
  return (
    <div>
      <select
        value={sortItem}
        onChange={(e) => setSortItem(e.target.value)}
        className=" bg-[#ffebb3] text-black py-4 px-4 text-2xl m-2 uppercase"
      >
        <option value="input">Sort by input order</option>
        <option value="description">Sort by Description</option>
        <option value="pack">Sort by Pack status</option>
      </select>
      <button
        onClick={onClear}
        className=" bg-[#ffebb3] text-black py-4 px-4 text-2xl m-2 uppercase"
      >
        Clear List
      </button>
    </div>
  );
}

export default PackingList;
