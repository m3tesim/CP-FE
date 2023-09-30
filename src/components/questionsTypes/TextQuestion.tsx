import { useContext } from "react";
import { customQuestionContext } from "../CustomQuestion";

const TextQuestion = () => {
  const { textInputRef } = useContext(customQuestionContext);
  return (
    <div>
      <input
        name="questionValue"
        type="text"
        className="w-full p-4 bg-white border border-black rounded mt-4"
        placeholder="Type here"
        ref={textInputRef}
      />
    </div>
  );
};

export default TextQuestion;
