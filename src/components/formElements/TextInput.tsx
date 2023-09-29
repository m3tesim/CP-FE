import { InputOptions } from "../../context/contextTypes";
import CheckBox from "./CheckBox";
import Toggle from "./Toggle";

type Props = {
  field: string;
  setOptions?: React.Dispatch<React.SetStateAction<InputOptions>>;
  options?: InputOptions;
  text?: string;
};

export default function TextInput({ setOptions, field, options, text }: Props) {
  const handelOptions = (newOptions: InputOptions) => {
    setOptions && setOptions(newOptions as InputOptions);
  };
  return (
    <div className="flex justify-between mt-2 border-grey-500 border-b py-4 place-items-center">
      <label htmlFor="firstName" className="text-left text-xl font-semibold">
        {field}
      </label>
      <div className="flex ga">
        {options && (
          <CheckBox
            options={options}
            handelOptions={handelOptions}
            field={text}
          />
        )}
        {options && (
          <Toggle
            options={options}
            handelOptions={handelOptions}
            id={`${field} Show`}
          />
        )}
      </div>
    </div>
  );
}
