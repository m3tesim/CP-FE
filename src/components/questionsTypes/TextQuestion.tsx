import { ForwardedRef, forwardRef } from "react";

const TextQuestion = forwardRef(
  (props, ref: ForwardedRef<HTMLInputElement | null>) => {
    return (
      <div>
        <input
          name="questionValue"
          type="text"
          className="w-full p-4 bg-white border border-black rounded mt-4"
          placeholder="Type here"
          ref={ref}
        />
      </div>
    );
  }
);

export default TextQuestion;
