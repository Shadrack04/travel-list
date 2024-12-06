import { useState } from "react";

export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      isPacked: false,
    };
    onAddItem(newItem);

    setDescription("");
    setQuantity(1);
  }
  return (
    <div className=" row-span-2 bg-[#e5771f] flex flex-col items-center py-4 gap-2 sm:flex-row sm:justify-center">
      <div>
        <p className=" text-[1.8rem] sm:text-[2.5rem]">
          What do you need for your 😍 trip?
        </p>
      </div>
      <form action="#" onSubmit={(e) => handleSubmit(e)}>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className=" bg-[#ffebb3] text-[#5a3e2b] border-none py-[0.5rem] px-[1.5rem] cursor-pointer"
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          className=" bg-[#ffebb3] w-[200px] sm:w-[350px] mx-5 text-[#5a3e2b] border-none py-[0.5rem] px-[3.2rem] cursor-pointer"
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className=" bg-[#76c7ad] text-[#5a3e2b] border-none py-[0.5rem] px-[1.6rem] cursor-pointer">
          Add
        </button>
      </form>
    </div>
  );
}
