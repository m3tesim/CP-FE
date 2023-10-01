/* eslint-disable @typescript-eslint/ban-ts-comment */
import FormContainer from "./FormContainer";
import Upload from "../assets/Upload.svg";
import { ChangeEvent, useState } from "react";
import Delete from "./formElements/Delete";

export default function ImageUploader() {
  const [image, setImage] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        // @ts-ignore
        setImage(e.target.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const deleteImage = () => {
    setImage(null);
  };
  console.log(image, "url");
  return (
    <FormContainer title="Upload cover image">
      <div>
        {image ? (
          <div>
            <img src={image} width="600" alt="Cover" />

            <div className="mt-4 cursor-pointer" onClick={() => deleteImage()}>
              <Delete text="Delete & re-upload" />
            </div>
          </div>
        ) : (
          <div>
            <input
              onChange={(e) => handleChange(e)}
              className="hidden"
              type="file"
              accept="image/*"
              name="input-file-upload"
              id="input-file-upload"
            />
            <label
              id="label-file-upload"
              htmlFor="input-file-upload"
              className=" flex cursor-pointer flex-col items-center rounded border-2 border-dashed p-10 text-center border-black"
            >
              <div className="">
                <img src={Upload} width="30" height="30" />
              </div>
              <p className=" font-Poppins font-semibold">Upload cover image</p>
              <span className="font-medium text-[#979797] font-Poppins text-sm ">
                16:9 ratio is recommended. Max image size 1mb
              </span>
            </label>
          </div>
        )}
      </div>
    </FormContainer>
  );
}
