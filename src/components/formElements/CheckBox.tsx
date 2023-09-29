import { InputOptions } from "../../context/contextTypes";

type CheckboxProps = {
  options: InputOptions;
  handelOptions: (newOptions: InputOptions) => void;
  field?: string;
};

export default function CheckBox({
  options,
  handelOptions,
  field,
}: CheckboxProps) {
  const handleCheckBox = () => {
    const newOptions = { ...options };

    if (newOptions.internalUse !== undefined)
      newOptions.internalUse = !newOptions.internalUse;
    if (newOptions.mandatory !== undefined)
      newOptions.mandatory = !newOptions.mandatory;

    handelOptions(newOptions as InputOptions);
    console.log(newOptions);
  };
  return (
    <div className="flex flex-row mt-4 place-items-center">
      <input
        name={field}
        type="checkbox"
        className="border grow-0"
        onChange={handleCheckBox}
      />
      <label htmlFor={field} className="text-sm mx-2 font-medium grow-0">
        {field}
      </label>
    </div>
  );
}
