type CheckboxProps = {
  id: string;
  field: string;
};

export default function CheckBox({ field, id }: CheckboxProps) {
  return (
    <div className="flex flex-row mt-4 place-items-center">
      <input name={id} id={id} type="checkbox" className="border grow-0" />
      <label htmlFor={id} className="text-sm mx-2 font-medium grow-0">
        {field}
      </label>
    </div>
  );
}
