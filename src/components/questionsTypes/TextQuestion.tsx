import { Dispatch, SetStateAction } from "react";

type Props = {
  setQuestionValue: Dispatch<SetStateAction<string>>;
};
export default function TextQuestion({ setQuestionValue }: Props) {
  return (
    <div>
      <input
        name="questionValue"
        type="text"
        className="w-full p-4 bg-white border border-black rounded mt-4"
        placeholder="Type here"
        onChange={(e) => setQuestionValue(e.target.value)}
      />
    </div>
  );
}
