export default function Form() {
  return (
    <div className=" row-span-2 bg-[#e5771f] flex flex-col items-center py-4 gap-2 sm:flex-row sm:justify-center">
      <div>
        <p className=" text-[2.5rem]">What do you need for your 😍 trip?</p>
      </div>
      <form action="#">
        <select className=" bg-[#ffebb3] text-[#5a3e2b] border-none py-[0.5rem] px-[1.5rem] cursor-pointer">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <input
          className=" bg-[#ffebb3] w-[200px] sm:w-[350px] mx-5 text-[#5a3e2b] border-none py-[0.5rem] px-[3.2rem] cursor-pointer"
          type="text"
          placeholder="Item..."
        />
        <button className=" bg-[#76c7ad] text-[#5a3e2b] border-none py-[0.5rem] px-[1.6rem] cursor-pointer">
          Add
        </button>
      </form>
    </div>
  );
}
