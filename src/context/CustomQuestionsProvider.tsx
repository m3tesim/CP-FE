import { createContext, useRef } from "react";
import { CustomQuestionContext } from "./contextTypes";

export const customQuestionContext = createContext<CustomQuestionContext>(
  {} as CustomQuestionContext
);
type Props = {
  children: React.ReactNode;
};
export default function CustomQuestionsProvider(props: Props) {
  const textInputRef = useRef<HTMLInputElement | null>(null);
  const choiceRef = useRef<HTMLInputElement | null>(null);
  const maxChoiceRef = useRef<HTMLInputElement | null>(null);

  return (
    <div>
      <customQuestionContext.Provider
        value={{ textInputRef, choiceRef, maxChoiceRef }}
      >
        {props.children}
      </customQuestionContext.Provider>
      CustomQuestionsProvider
    </div>
  );
}
