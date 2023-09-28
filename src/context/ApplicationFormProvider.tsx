import { createContext, Dispatch, SetStateAction, useState } from "react";
import { PersonalInformation, fetchData } from "./contextTypes";
import APIData from "../postData.json";

type contextProps = {
  data: fetchData;
  setData: Dispatch<SetStateAction<fetchData>>;
  personalInformation: PersonalInformation;
  setPersonalInformation: Dispatch<SetStateAction<PersonalInformation>>;
};
type Props = {
  children: React.ReactNode;
};

export const applicationContext = createContext({} as contextProps);

export default function ApplicationFormProvider({ children }: Props) {
  const [data, setData] = useState({} as fetchData);
  const [personalInformation, setPersonalInformation] = useState(
    {} as PersonalInformation
  );

  const handelDataFetch = () => {
    const dataUpdate = data;
    dataUpdate.attributes.personalInformation = personalInformation;
    setData(dataUpdate);
  };

  return (
    <>
      <applicationContext.Provider
        value={{ data, setData, personalInformation, setPersonalInformation }}
      >
        {children}
      </applicationContext.Provider>
    </>
  );
}
