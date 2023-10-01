import { useContext } from "react";
import { customQuestionContext } from "../../context/CustomQuestionsProvider";

export default function VideoQuestion() {
  const { textInputRef } = useContext(customQuestionContext);

  return (
    <div>
      <input
        ref={textInputRef}
        name="questionValue"
        type="text"
        className="w-full p-4 bg-white border border-black rounded mt-4"
        placeholder="Type here"
      />
      <textarea className="w-full h-2/3 p-4 bg-white border border-black rounded mt-4" />
      <div className="flex gap-1 justify-between place-items-center">
        <input
          name="questionValue"
          type="text"
          className="w-7/12 p-4 bg-white border border-black rounded mt-4"
          placeholder="Max duration of video"
        />
        <select className="w-2/5 mt-4 h-1/2 p-4 text-gray-500 bg-white border border-black rounded">
          <option
            className="text-grey-300"
            value="none"
            selected
            disabled
            hidden
          >
            in (sec/min)
          </option>

          <option>sec</option>
          <option>min</option>
        </select>
      </div>
    </div>
  );
}
