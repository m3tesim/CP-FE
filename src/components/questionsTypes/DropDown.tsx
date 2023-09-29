import Plus from "../../assets/plus.svg";
import Group from "../../assets/group.svg";

export default function DropDown() {
  return (
    <>
      <input
        type="text"
        className="w-full p-4 bg-white border border-black rounded mt-4"
        placeholder="Type here"
      />
      <p className="mt-6">Choice</p>
      <div className="flex flex-row gap-2 place-items-center my-4">
        <img src={Group} width={24} height={24} />
        <input
          type="text"
          className="w-full p-4 bg-white border border-black rounded "
          placeholder="Type here"
        />
        <img src={Plus} width={13} height={13} />
      </div>
      <div className="mt-4 ml-1">
        <input type="checkbox" id="enableOtherOption" />
        <label className="ml-2 font-medium text-sm" htmlFor="enableOtherOption">
          Enable Other Option
        </label>
      </div>
    </>
  );
}
