import {
  createContext,
  Dispatch,
  SetStateAction,
  useRef,
  useState,
} from "react";
import QuestionType from "./QuestionType";
import Select from "./formElements/Select";
import DeleteQuestion from "./formElements/Delete";
import FormContainer from "./FormContainer";
import { CustomQuestion } from "../context/contextTypes";
import { v4 as uuidv4 } from "uuid";

type Props = {
  closeNewQuestion: Dispatch<SetStateAction<boolean>>;
  additionalQuestion: CustomQuestion[];
  setQuestionsArray: Dispatch<SetStateAction<CustomQuestion[]>>;
};
type CustomQuestionContext = {
  textInputRef: React.MutableRefObject<HTMLInputElement | null>;
  choiceRef: React.MutableRefObject<HTMLInputElement | null>;
  maxChoiceRef: React.MutableRefObject<HTMLInputElement | null>;
};
export const customQuestionContext = createContext<CustomQuestionContext>(
  {} as CustomQuestionContext
);

const CustomQuestions = ({
  closeNewQuestion,
  additionalQuestion,
  setQuestionsArray,
}: Props) => {
  const [selectionValue, setSelectionValue] = useState<string>("");

  console.log(additionalQuestion, "this is aditional question  from custom");
  const textInputRef = useRef<HTMLInputElement | null>(null);
  const choiceRef = useRef<HTMLInputElement | null>(null);
  const maxChoiceRef = useRef<HTMLInputElement | null>(null);

  const handelSaveQuestion = () => {
    const newQuestion: CustomQuestion = {
      id: uuidv4(),
      type: selectionValue,
      question: textInputRef?.current?.value || "",
      choices: [choiceRef.current?.value || "string"],
      maxChoice: Number(maxChoiceRef?.current?.value),
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
      <customQuestionContext.Provider
        value={{ textInputRef, choiceRef, maxChoiceRef }}
      >
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
            <DeleteQuestion />
          </span>

          <button
            className="text-green-50 text-sm font-semibold font-Poppins  bg-green-700 rounded-md px-3 py-2"
            onClick={handelSaveQuestion}
          >
            Save
          </button>
        </div>
      </customQuestionContext.Provider>
    </FormContainer>
  );
};

export default CustomQuestions;
