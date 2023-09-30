import { CustomQuestion } from "../context/contextTypes";
import FormContainer from "./FormContainer";
import Pencil from "../assets/pen.svg";

type Props = { form: string; additionalQuestion: CustomQuestion[] };

export default function AdditionalQuestions({
  form,
  additionalQuestion,
}: Props) {
  console.log(additionalQuestion, "this is aditional question ");
  return (
    <FormContainer title={`${form} Additional Questions`}>
      {additionalQuestion?.map((question) => (
        <div className="border-solid border-gray-100 border-b mb-4">
          <p className="text-gray-400 pb-3">{question.type}</p>
          <div className="flex justify-between pb-6">
            <p className="font-bold">{question.question}</p>
            <img src={Pencil} width={18} height={18} />
          </div>
        </div>
      ))}
    </FormContainer>
  );
}
