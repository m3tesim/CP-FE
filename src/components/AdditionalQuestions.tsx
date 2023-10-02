/* eslint-disable @typescript-eslint/ban-ts-comment */
import { CustomQuestion } from "../context/contextTypes";
import FormContainer from "./FormContainer";
import Pencil from "../assets/pen.svg";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import QuestionType from "./QuestionType";
import Delete from "./formElements/Delete";
import { v4 as uuidv4 } from "uuid";
import { customQuestionContext } from "../context/CustomQuestionsProvider";

type Props = {
  form: string;
  closeNewQuestion: Dispatch<SetStateAction<boolean>>;
  additionalQuestion: CustomQuestion[];
  setQuestionsArray: (prevState: CustomQuestion[]) => void;

  handelSave: () => void;
};

export default function AdditionalQuestions({
  form,
  additionalQuestion,
  handelSave,
  setQuestionsArray,
  closeNewQuestion,
}: Props) {
  return (
    <FormContainer title={`${form} Additional Questions`}>
      {additionalQuestion?.map((question, index) => (
        <SavedQuestion
          key={index}
          additionalQuestion={additionalQuestion}
          setQuestionsArray={setQuestionsArray}
          closeNewQuestion={closeNewQuestion}
          question={question}
        />
      ))}
      <button
        className="mt-4 w-20 text-sm font-semibold border-solid border-2 border-gray-500 rounded-md px-3 py-2"
        onClick={handelSave}
      >
        Update
      </button>
    </FormContainer>
  );
}

type SavedQuestionProps = {
  additionalQuestion: CustomQuestion[];

  question: CustomQuestion;
  setQuestionsArray: (prevState: CustomQuestion[]) => void;
  closeNewQuestion: Dispatch<SetStateAction<boolean>>;
};
function SavedQuestion({
  additionalQuestion,
  question,
  setQuestionsArray,
}: SavedQuestionProps) {
  const [edit, setEdit] = useState(false);

  return (
    <div className="border-solid border-gray-100 border-b mb-4">
      {edit ? (
        <EditQuestion
          additionalQuestion={additionalQuestion}
          question={question}
          setQuestionsArray={setQuestionsArray}
          closeNewQuestion={setEdit}
          selectionValue={question.type}
        />
      ) : (
        <div>
          <p className="text-gray-400 pb-3">{question.type}</p>
          <div className="flex justify-between pb-6">
            <p className="font-bold">{question.question}</p>
            <img
              className="cursor-pointer"
              src={Pencil}
              width={18}
              height={18}
              onClick={() => setEdit(true)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

const EditQuestion = ({
  selectionValue,
  setQuestionsArray,
  closeNewQuestion,
  question,
  additionalQuestion,
}: {
  selectionValue: string;
} & SavedQuestionProps) => {
  const { textInputRef, choiceRef, maxChoiceRef } = useContext(
    customQuestionContext
  );
  const handelSaveQuestion = () => {
    //@ts-ignore
    const updatedQuestion: CustomQuestion = additionalQuestion.find(
      (q) => (q.id = question.id)
    );

    updatedQuestion.id = uuidv4();
    updatedQuestion.question = textInputRef?.current?.value || "";
    updatedQuestion.choices = [choiceRef.current?.value || "string"];
    (updatedQuestion.maxChoice = Number(maxChoiceRef?.current?.value) || 0),
      closeNewQuestion(false);
  };
  const deleteQuestion = () => {
    const newQuestions = additionalQuestion.filter((q) => q.id !== question.id);
    setQuestionsArray(newQuestions);
    closeNewQuestion(false);
  };

  return (
    <div>
      <QuestionType selectionValue={selectionValue} />
      <div className="mt-14 cursor-pointer flex flex-row justify-between">
        <span onClick={() => deleteQuestion()}>
          <Delete text="Delete question" />
        </span>

        <button
          className="text-green-50 text-sm font-semibold font-Poppins  bg-green-700 rounded-md px-3 py-2"
          onClick={handelSaveQuestion}
        >
          Save
        </button>
      </div>
    </div>
  );
};
