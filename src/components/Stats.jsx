import React from "react";

function Stats({ items }) {
  const itemCount = items.length;
  const packedItemCount = items.filter((item) => item.isPacked).length;
  const percentage = Math.round((packedItemCount / itemCount) * 100) || 0;

  return (
    <div className=" row-span-2 bg-[#76c7ad] text-center font-light py-8">
      {items.length !== 0 ? (
        <em>
          You have {itemCount} items on your list, and you already packed{" "}
          {packedItemCount} ({percentage}%)
        </em>
      ) : (
        <em>Start adding items you will need for your trip.</em>
      )}
    </div>
  );
}

export default Stats;
