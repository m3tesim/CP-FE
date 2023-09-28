import React from "react";

type Props = {
  children: React.ReactNode;
  title: string;
};

export default function FormContainer({ children, title }: Props) {
  return (
    <div className="w-5/12  shadow-md ml-52 rounded-2xl my-28 ">
      <h2 className="bg-cyan-100 w-full text-left  h-20 py-6 pl-8 rounded-t-2xl text-2xl font-Poppins font-semibold">
        {title}
      </h2>
      <div className="w-full p-10 bg-white rounded-b-2xl">{children}</div>
    </div>
  );
}
