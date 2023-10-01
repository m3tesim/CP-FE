import FormContainer from "./FormContainer";
import TextInput from "./formElements/TextInput";
import { InputOptions } from "../context/contextTypes";
import { useContext, useState } from "react";
import { applicationContext } from "../context/ApplicationFormProvider";

const inputOptions: InputOptions = { internalUse: false, show: false };

export default function PersonalInformationForm() {
  const { data, handelPersonalInformation } = useContext(applicationContext);

  const [phoneNumber, setPhoneNumber] = useState(inputOptions);
  const [nationality, setNationality] = useState(inputOptions);
  const [currentResidence, setCurrentResidence] = useState(inputOptions);
  const [idNumber, setIdNumber] = useState(inputOptions);
  const [dateOfBirth, setDateOfBirth] = useState(inputOptions);
  const [gender, setGender] = useState(inputOptions);

  const handelSave = () => {
    const personalInfoData = data?.data.attributes?.personalInformation;
    const newPersonalInfoData = { ...personalInfoData };
    newPersonalInfoData.currentResidence = currentResidence;
    newPersonalInfoData.phoneNumber = phoneNumber;
    newPersonalInfoData.nationality = nationality;
    newPersonalInfoData.idNumber = idNumber;
    newPersonalInfoData.dateOfBirth = dateOfBirth;
    newPersonalInfoData.gender = gender;

    //setPersonalInfoData(newPersonalInfoData);

    const newPersonalInfoData2 = {
      currentResidence: currentResidence,
      phoneNumber: phoneNumber,
      nationality: nationality,
      idNumber: idNumber,
      dateOfBirth: dateOfBirth,
      gender: gender,
      personalQuestions: [
        {
          id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          type: "Paragraph",
          question: "string",
          choices: ["string"],
          maxChoice: 0,
          disqualify: false,
          other: false,
        },
      ],
    };
    handelPersonalInformation(newPersonalInfoData);
  };

  return (
    <section>
      <FormContainer title="Personal Information">
        <TextInput field="First Name" />
        <TextInput field="Last Name" />
        <TextInput field="Email" />
        <TextInput
          setOptions={setPhoneNumber}
          field="Phone (With out dial code)"
          options={phoneNumber}
          text="internal"
        />
        <TextInput
          setOptions={setNationality}
          field="Nationality"
          options={nationality}
          text="internal"
        />
        <TextInput
          setOptions={setCurrentResidence}
          field="Current Residence "
          options={currentResidence}
          text="internal"
        />
        <TextInput
          setOptions={setIdNumber}
          field="ID Number"
          options={idNumber}
          text="internal"
        />
        <TextInput
          setOptions={setDateOfBirth}
          field="Date of Birth "
          options={dateOfBirth}
          text="internal"
        />
        <TextInput
          setOptions={setGender}
          field="Gender"
          options={gender}
          text="internal"
        />
        <button
          className="mt-4 w-20 text-sm font-semibold border-solid border-2 border-gray-500 rounded-md px-3 py-2"
          onClick={handelSave}
        >
          Update
        </button>{" "}
      </FormContainer>
    </section>
  );
}
