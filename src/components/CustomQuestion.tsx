import { useState } from "react";
import QuestionType from "./QuestionType";
import Select from "./formElements/Select";
import DeleteQuestion from "./DeleteQuestion";
import FormContainer from "./FormContainer";

interface QuestionProps {
  type?: string;
  question?: string;
}
interface Props {
  deleteQuestions: React.Dispatch<React.SetStateAction<boolean>>;
  setQuestionValue: React.Dispatch<React.SetStateAction<string>>;
  setQuestionsArray: React.Dispatch<React.SetStateAction<QuestionProps[]>>;
  questionsArray: QuestionProps[];
  questionValue: string;
}
const CustomQuestions = ({
  deleteQuestions,
  setQuestionValue,
  setQuestionsArray,
  questionsArray,
  questionValue,
}: Props) => {
  const [selectionValue, setSelectionValue] = useState<string>("");

  return (
    <>
      <FormContainer title="Additional Questions">
        <p className="text-left text-lg font-semibold">Type</p>
        <Select changeSelectionValue={setSelectionValue} />
        <div className="mt-10">
          {selectionValue && (
            <p className="text-left text-lg font-semibold">Question</p>
          )}
          <QuestionType
            selectionValue={selectionValue}
            setQuestionValue={setQuestionValue}
          />
        </div>

        <div className="mt-14 cursor-pointer flex flex-row justify-between">
          <DeleteQuestion deleteQuestion={deleteQuestions} />
          <button
            type="button"
            className="text-green-50 text-sm font-semibold font-Poppins  bg-green-700 rounded-md px-3 py-2"
            onClick={() => {
              deleteQuestions(false);
              const newQuestion = {
                type: selectionValue,
                question: questionValue,
              };
              const myArray = [...questionsArray, newQuestion];
              setQuestionsArray(myArray);
            }}
          >
            Save
          </button>
        </div>
      </FormContainer>
    </>
  );
};

export default CustomQuestions;
