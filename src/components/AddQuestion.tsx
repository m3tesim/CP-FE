interface Props {
  addQuestion: React.Dispatch<React.SetStateAction<boolean>>;
}
const AddQuestion = ({ addQuestion }: Props) => {
  return (
    <div className="cursor-pointer mt-4">
      <div className="flex gap-3" onClick={() => addQuestion(true)}>
        <span className="text-2xl font-bold">+</span>
        <p className="mt-1">Add a question</p>
      </div>
    </div>
  );
};

export default AddQuestion;
