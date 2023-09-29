type CheckboxProps = {
  checked: boolean | undefined;
  toggle: () => void;
  id: string;
  field?: string;
};

export default function CheckBox({ toggle, field }: CheckboxProps) {
  return (
    <div className="flex flex-row mt-4 place-items-center">
      <input
        name={field}
        type="checkbox"
        className="border grow-0"
        onChange={toggle}
      />
      <label htmlFor={field} className="text-sm mx-2 font-medium grow-0">
        {field}
      </label>
    </div>
  );
}
