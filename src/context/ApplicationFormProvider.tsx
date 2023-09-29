import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { PersonalInformation, fetchData } from "./contextTypes";
import { data } from "../postData";

type contextProps = {
  data: fetchData;
  setData: Dispatch<SetStateAction<fetchData>>;
  // personalInformation: PersonalInformation;
  // setPersonalInformation: Dispatch<SetStateAction<PersonalInformation>>;
  // handelPersonalInformation: () => void;
};
type Props = {
  children: React.ReactNode;
};

export const applicationContext = createContext({} as contextProps);
const apiUrl =
  "http://127.0.0.1:4010/api/481.2007825550955/programs/corrupti/application-form";
export default function ApplicationFormProvider(props: Props) {
  console.log(data, "this is data");
  const [formData, setFormData] = useState(data as fetchData);
  const [personalInformation, setPersonalInformation] = useState(
    {} as PersonalInformation
  );

  useEffect(() => {
    fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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
  }, [formData]);
  /*
  const handelPersonalInformation = () => {
    const dataUpdate = { ...formData };
    dataUpdate.attributes.personalInformation = personalInformation;
    setFormData(dataUpdate);
  };*/

  return (
    <>
      <applicationContext.Provider
        value={{
          data: data,
          setData: setFormData,
        }}
      >
        {props.children}
      </applicationContext.Provider>
    </>
  );
}
