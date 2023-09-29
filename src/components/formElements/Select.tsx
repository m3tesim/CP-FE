import { Dispatch, SetStateAction } from "react";

type Props = {
  changeSelectionValue: Dispatch<SetStateAction<string>>;
};

const questionsType = [
  { name: "Paragraph", value: "Paragraph" },
  { name: "Short Answer", value: "ShortAnswer" },
  { name: "Yes/No", value: "YesNo" },
  { name: "Dropdown", value: "Dropdown" },
  { name: "Multiple Choice", value: "MultipleChoice" },
  { name: "Date", value: "Date" },
  { name: "Number", value: "Number" },
  { name: "File Upload", value: "FileUpload" },
  { name: "Video Question", value: "VideoQuestion" },
];

const Select = ({ changeSelectionValue }: Props) => {
  return (
    <div className="relative h-10 w-full pt-2 bg-white mt-2  ">
      <select
        className="w-full p-4 bg-white border border-black rounded"
        onChange={(e) => changeSelectionValue(e.target.value)}
      >
        <option value="none" selected disabled hidden>
          Select an Option
        </option>

        {questionsType.map((q, index) => (
          <option key={index} value={q.value}>
            {q.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
