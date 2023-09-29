import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { PersonalInformation, fetchData } from "./contextTypes";
import { APIdata } from "../postData";

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

export default function ApplicationFormProvider(props: Props) {
  const [data, setData] = useState(APIdata as fetchData);
  const [personalInformation, setPersonalInformation] = useState(
    {} as PersonalInformation
  );

  useEffect(() => {
    fetch(
      "http://127.0.0.1:4010/api/738.0053943690481/programs/qui/application-form",
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [data]);

  const handelPersonalInformation = () => {
    const dataUpdate = { ...data };
    dataUpdate.attributes.personalInformation = personalInformation;
    setData(dataUpdate);
  };

  return (
    <>
      <applicationContext.Provider
        value={{
          data: data,
          setData: setData,
        }}
      >
        {props.children}
      </applicationContext.Provider>
    </>
  );
}
