import DropDown from "./questionsTypes/DropDown";
import MultipleChoice from "./questionsTypes/MultipleChoice";
import TextQuestion from "./questionsTypes/TextQuestion";
import VideoQuestion from "./questionsTypes/VideoQuestion";

interface QuestionTypeProps {
  selectionValue: string;
  setQuestionValue: React.Dispatch<React.SetStateAction<string>>;
}
const QuestionType = ({
  selectionValue,
  setQuestionValue,
}: QuestionTypeProps) => {
  return (
    <>
      {(() => {
        switch (selectionValue) {
          case "Dropdown":
            return <DropDown />;
          case "MultipleChoice":
            return <MultipleChoice />;
          case "VideoQuestion":
            return <VideoQuestion />;
          default:
            return (
              selectionValue && (
                <TextQuestion setQuestionValue={setQuestionValue} />
              )
            );
        }
      })()}
    </>
  );
};

export default QuestionType;
