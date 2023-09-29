import { InputOptions } from "../../context/contextTypes";
import CheckBox from "./CheckBox";
import Toggle from "./Toggle";

type Props = {
  field: string;
  setOptions?: React.Dispatch<React.SetStateAction<InputOptions>>;
  options?: {
    show: boolean;
    internalUse: boolean;
  };
  text?: string;
};

export default function TextInput({ setOptions, field, options, text }: Props) {
  const handelOptions = () => {
    const isChecked = options?.internalUse;
    console.log(isChecked);

    const newOptions = { ...options };
    newOptions.internalUse = !isChecked;
    //console.log(isChecked, "is check");

    console.log(newOptions);
    setOptions && setOptions(newOptions as InputOptions);
  };
  return (
    <div className="flex justify-between mt-2 border-grey-500 border-b py-4 place-items-center">
      <label htmlFor="firstName" className="text-left text-xl font-semibold">
        {field}
      </label>
      <div className="flex ga">
        {options && (
          <span>
            <CheckBox
              checked={options.internalUse}
              toggle={handelOptions}
              field={text}
              id={field}
            />
          </span>
        )}
        {options?.show && <Toggle id={`${field} Show`} />}
      </div>
    </div>
  );
}
