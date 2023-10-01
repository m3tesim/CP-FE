import { useContext } from "react";
import Group from "../../assets/group.svg";
import Plus from "../../assets/plus.svg";
import { customQuestionContext } from "../../context/CustomQuestionsProvider";

export default function MultipleChoice() {
  const { textInputRef, choiceRef, maxChoiceRef } = useContext(
    customQuestionContext
  );

  return (
    <>
      <input
        ref={textInputRef}
        type="text"
        className="w-full p-4 bg-white border border-black rounded mt-4"
        placeholder="Type here"
      />
      <p className="mt-6">Choice</p>
      <div className="flex flex-row gap-2  mt-4">
        <img src={Group} width={24} height={24} />
        <input
          ref={choiceRef}
          type="text"
          className="w-full p-4 bg-white border border-black rounded"
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
      <div className="mt-12">
        <p>Max choice allowed</p>
        <input
          ref={maxChoiceRef}
          type="number"
          id="maxChoice"
          className="w-full p-4 bg-white border border-black rounded mt-4"
          placeholder="Enter number of choice allowed here"
        />
      </div>
    </>
  );
}
