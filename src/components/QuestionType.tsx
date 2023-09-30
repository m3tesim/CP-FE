import { ForwardedRef, forwardRef } from "react";
import DropDown from "./questionsTypes/DropDown";
import MultipleChoice from "./questionsTypes/MultipleChoice";
import TextQuestion from "./questionsTypes/TextQuestion";
import VideoQuestion from "./questionsTypes/VideoQuestion";

interface QuestionTypeProps {
  selectionValue: string;
}
const QuestionType = forwardRef(
  (
    { selectionValue }: QuestionTypeProps,
    ref: ForwardedRef<HTMLInputElement | null>
  ) => {
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
              return selectionValue && <TextQuestion ref={ref} />;
          }
        })()}
      </>
    );
  }
);

export default QuestionType;
