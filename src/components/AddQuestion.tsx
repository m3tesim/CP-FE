interface Props {
  addQuestion: React.Dispatch<React.SetStateAction<boolean>>;
}
const AddQuestion = ({ addQuestion }: Props) => {
  return (
    <div className="cursor-pointer mt-4">
      <div onClick={() => addQuestion(true)}>
        <a className="flex gap-3 " href="#new-question">
          <span className="text-2xl font-bold">+</span>
          <p className="mt-1">Add a question</p>
        </a>
      </div>
    </div>
  );
};

export default AddQuestion;
