import { createContext, Dispatch, SetStateAction, useState } from "react";
import { PersonalInformation, fetchData } from "./contextTypes";
import { data } from "../postData";

type contextProps = {
  data: fetchData;
  setData: Dispatch<SetStateAction<fetchData>>;
  // personalInformation: PersonalInformation;
  // setPersonalInformation: Dispatch<SetStateAction<PersonalInformation>>;
  handelPersonalInformation: (personalInformation: PersonalInformation) => void;
};
type Props = {
  children: React.ReactNode;
};

export const applicationContext = createContext({} as contextProps);
const apiUrl =
  " http://127.0.0.1:4010/api/231.47081853513376/programs/quia/application-form";
export default function ApplicationFormProvider(props: Props) {
  const [formData, setFormData] = useState(data as fetchData);
  // const [personalInformation, setPersonalInformation] = useState(
  //   {} as PersonalInformation
  //);

  const handelUpdateData = () => {
    fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response;
      })
      .then((data) => {
        console.log("Application form updated successfully:", data);
      })
      .catch((error) => {
        console.error("Error updating application form:", error);
      });
    console.log(formData);
  };

  const handelPersonalInformation = (
    personalInformation: PersonalInformation
  ) => {
    const dataUpdate = { ...formData };
    dataUpdate.data.attributes.personalInformation = personalInformation;
    setFormData(dataUpdate);

    return handelUpdateData();
  };

  return (
    <>
      <applicationContext.Provider
        value={{
          data: data,
          setData: setFormData,
          handelPersonalInformation,
        }}
      >
        {props.children}
      </applicationContext.Provider>
    </>
  );
}
