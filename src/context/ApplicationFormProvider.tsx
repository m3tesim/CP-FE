import { createContext, Dispatch, SetStateAction, useState } from "react";
import { PersonalInformation, fetchData, Profile } from "./contextTypes";
import { data } from "../postData";

type contextProps = {
  data: fetchData;
  setData: Dispatch<SetStateAction<fetchData>>;
  handelPersonalInformation: (personalInformation: PersonalInformation) => void;
  handelProfile: (profile: Profile) => void;
};
type Props = {
  children: React.ReactNode;
};

export const applicationContext = createContext({} as contextProps);
const apiUrl =
  "http://127.0.0.1:4010/api/562.2545530106152/programs/perferendis/application-form";
export default function ApplicationFormProvider(props: Props) {
  const [formData, setFormData] = useState(data as fetchData);

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

  const handelProfile = (profile: Profile) => {
    const dataUpdate = { ...formData };
    dataUpdate.data.attributes.profile = profile;
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
          handelProfile,
        }}
      >
        {props.children}
      </applicationContext.Provider>
    </>
  );
}
