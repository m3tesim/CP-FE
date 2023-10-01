import { useState } from "react";
import { InputOptions } from "../../context/contextTypes";

type Props = {
  id: string;
  handelOptions: (newOptions: InputOptions) => void;
  options: {
    show: boolean;
    internalUse?: boolean;
    mandatory?: boolean;
  };
  initialState?: boolean;
};
function Toggle({ options, handelOptions, id }: Props) {
  const [isChecked, setIsChecked] = useState(options.show);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    const newOptions = { ...options };
    newOptions.show = !isChecked;
    handelOptions(newOptions as InputOptions);
  };

  return (
    <div className="mt-6 flex gap-2">
      <div className="bg-white">
        <label
          htmlFor={id}
          className="relative inline-flex items-center cursor-pointer"
        >
          <input
            type="checkbox"
            checked={options.show}
            className="sr-only peer"
            id={id}
            name={id}
            onChange={handleToggle}
          />
          <div className="w-11 h-6 bg-grey-600 peer-focus:outline-none peer-focus:ring-4  border-2 rounded-full peer  peer-checked:after:translate-x-full border-gray-400-400 peer-checked:after:border-green-600 peer-checked:bg-green-600  after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
        </label>
      </div>
      <label htmlFor={id}>{isChecked ? "Show" : "Hide"}</label>
    </div>
  );
}

export default Toggle;
