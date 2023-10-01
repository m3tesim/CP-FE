import { Dispatch, SetStateAction, useContext, useState } from "react";
import QuestionType from "./QuestionType";
import Select from "./formElements/Select";
import Delete from "./formElements/Delete";
import FormContainer from "./FormContainer";
import { CustomQuestion } from "../context/contextTypes";
import { v4 as uuidv4 } from "uuid";
import { customQuestionContext } from "../context/CustomQuestionsProvider";

type Props = {
  closeNewQuestion: Dispatch<SetStateAction<boolean>>;
  additionalQuestion: CustomQuestion[];
  setQuestionsArray: (prevState: CustomQuestion[]) => void;
};

const CustomQuestions = ({
  closeNewQuestion,
  additionalQuestion,
  setQuestionsArray,
}: Props) => {
  const { textInputRef, choiceRef, maxChoiceRef } = useContext(
    customQuestionContext
  );
  const [selectionValue, setSelectionValue] = useState<string>("");
  console.log(additionalQuestion, "this is aditional question  from custom");

  const handelSaveQuestion = () => {
    const newQuestion: CustomQuestion = {
      id: uuidv4(),
      type: selectionValue,
      question: textInputRef?.current?.value || "",
      choices: [choiceRef.current?.value || "string"],
      maxChoice: Number(maxChoiceRef?.current?.value) || 0,
      disqualify: false,
      other: false,
    };

    const newAdditionalQuestion = [...additionalQuestion, newQuestion];
    setQuestionsArray(newAdditionalQuestion);
    closeNewQuestion(false);
    console.log(newAdditionalQuestion);
  };
  return (
    <FormContainer title="Additional Questions">
      <p className="text-left text-lg font-semibold">Type</p>
      <Select changeSelectionValue={setSelectionValue} />
      <div className="mt-10">
        {selectionValue && (
          <p className="text-left text-lg font-semibold">Question</p>
        )}
        <QuestionType selectionValue={selectionValue} />
      </div>

      <div className="mt-14 cursor-pointer flex flex-row justify-between">
        <span onClick={() => closeNewQuestion(false)}>
          <Delete text="Delete question" />
        </span>

        <button
          className="text-green-50 text-sm font-semibold font-Poppins  bg-green-700 rounded-md px-3 py-2"
          onClick={handelSaveQuestion}
        >
          Save
        </button>
      </div>
    </FormContainer>
  );
};

export default CustomQuestions;
