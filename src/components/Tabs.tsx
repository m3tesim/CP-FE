export default function Tabs() {
  return (
    <div className="h-28  flex shadow-md mt-16 min-w-full justify-center text-xl place-items-center">
      <div className="h-20 w-72  flex justify-center place-items-center border-r-2 border-solid border-gray-300">
        Program Details
      </div>
      <div className="h-28 w-72 text-white bg-emerald-800 flex justify-center place-items-center">
        Application Form
      </div>
      <div className="w-11  overflow-hidden inline-block">
        <div className=" h-16 bg-emerald-800 rotate-45 transform origin-top-left"></div>
      </div>
      <div className="h-20 w-72 flex justify-center place-items-center border-r-2 border-solid border-gray-300">
        Workflow
      </div>
      <div className="h-28 w-72 flex justify-center place-items-center">
        Preview
      </div>
    </div>
  );
}
