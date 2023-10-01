import X from "../../assets/x.svg";

const Delete = ({ text }: { text: string }) => {
  return (
    <div className="">
      <div className="flex  gap-3 text-red-800 font-bold">
        <img src={X} width={24} height={24} />
        <p className="mt-1">{text}</p>
      </div>
    </div>
  );
};

export default Delete;
