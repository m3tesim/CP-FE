import { CustomQuestion } from "../context/contextTypes";
import FormContainer from "./FormContainer";
import Pencil from "../assets/pen.svg";

type Props = {
  form: string;
  additionalQuestion: CustomQuestion[];
  handelSave: () => void;
};

export default function AdditionalQuestions({
  form,
  additionalQuestion,
  handelSave,
}: Props) {
  console.log(additionalQuestion, "this is aditional question ");
  return (
    <FormContainer title={`${form} Additional Questions`}>
      {additionalQuestion?.map((question, index) => (
        <div key={index} className="border-solid border-gray-100 border-b mb-4">
          <p className="text-gray-400 pb-3">{question.type}</p>
          <div className="flex justify-between pb-6">
            <p className="font-bold">{question.question}</p>
            <img src={Pencil} width={18} height={18} />
          </div>
        </div>
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
