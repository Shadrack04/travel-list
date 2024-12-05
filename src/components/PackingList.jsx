import React from "react";

function PackingList() {
  return (
    <div className=" row-span-6 bg-[#5a3e2b] text-[#ffebb3] py-8 flex flex-col justify-between items-center gap-4">
      <Lists />
      <Sort />
    </div>
  );
}

function Lists() {
  return (
    <ul className=" list-none w-[80%] overflow-scroll sm:overflow-auto grid grid-cols-auto-fit-minmax gap-4">
      <li className=" bg-red-600">hello, world</li>
      <li>hello</li>
      <li>hello</li>
    </ul>
  );
}

// .list ul {
//   list-style: none;
//   width: 80%;
//   overflow: scroll;

//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   gap: 1.2rem;
//   justify-content: center;
//   align-content: start;
// }

function Sort() {
  return (
    <div>
      <select className=" bg-[#ffebb3] text-black py-4 px-4 text-2xl m-2 uppercase">
        <option value="">Sort by input order</option>
      </select>
      <button className=" bg-[#ffebb3] text-black py-4 px-4 text-2xl m-2 uppercase">
        Clear List
      </button>
    </div>
  );
}

export default PackingList;
