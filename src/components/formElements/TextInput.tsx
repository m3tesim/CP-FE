import Toggle from "./Toggle";

type Props = {
  field: string;
  options?: {
    checkBox?: string;
    toggle?: boolean;
  };
};

export default function TextInput({ field, options }: Props) {
  return (
    <div className="flex justify-between mt-2 border-grey-500 border-b py-4 place-items-center">
      <label htmlFor="firstName" className="text-left text-xl font-semibold">
        {field}
      </label>
      {options?.toggle && <Toggle id={`${5} Show`} />}
    </div>
  );
}
