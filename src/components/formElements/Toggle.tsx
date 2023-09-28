import { useState } from "react";

type ToggleSwitchProps = {
  id: string;
  initialState?: boolean;
};
function ToggleSwitch({ id, initialState = true }: ToggleSwitchProps) {
  const [isChecked, setIsChecked] = useState(initialState);

  const handleToggle = () => {
    setIsChecked(!isChecked);
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
            checked={isChecked}
            className="sr-only peer"
            id={id}
            name={id}
            onChange={handleToggle}
          />
          <div className="w-11 h-6 bg-green-600 peer-focus:outline-none peer-focus:ring-4  border-2 rounded-full peer  peer-checked:after:translate-x-full border-gray-400-400 peer-checked:after:border-gray-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-white"></div>
        </label>
      </div>
      <label htmlFor={id}>{isChecked ? "Hide" : "Show"}</label>
    </div>
  );
}

export default ToggleSwitch;
