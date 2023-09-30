import DropDown from "./questionsTypes/DropDown";
import MultipleChoice from "./questionsTypes/MultipleChoice";
import TextQuestion from "./questionsTypes/TextQuestion";
import VideoQuestion from "./questionsTypes/VideoQuestion";

interface QuestionTypeProps {
  selectionValue: string;
}
const QuestionType = ({ selectionValue }: QuestionTypeProps) => {
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
            return selectionValue && <TextQuestion />;
        }
      })()}
    </>
  );
};

export default QuestionType;
