import FormContainer from "./FormContainer";
import TextInput from "./formElements/TextInput";
import { PersonalInformation, InputOptions } from "../context/contextTypes";
import { useContext, useState } from "react";
import { applicationContext } from "../context/ApplicationFormProvider";
console.log(applicationContext, "context");
const personalInformation: PersonalInformation = {
  firstName: { internalUse: false, show: true },
  lastName: { internalUse: false, show: true },
  emailId: { internalUse: false, show: true },
  phoneNumber: { internalUse: false, show: true },
  nationality: { internalUse: false, show: true },
  currentResidence: { internalUse: false, show: true },
  idNumber: { internalUse: false, show: true },
  dateOfBirth: { internalUse: false, show: true },
  gender: { internalUse: false, show: true },
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
const inputOptions: InputOptions = { internalUse: false, show: true };

export default function PersonalInformationForm() {
  const { data, setData } = useContext(applicationContext);
  const [personalInfoData, setpersonalInfoData] = useState(
    data?.data.attributes?.personalInformation as PersonalInformation
  );
  const [phoneNumber, setPhoneNumber] = useState(inputOptions);
  const [nationality, setNationality] = useState(inputOptions);
  const [currentResidence, setCurrentResidence] = useState(inputOptions);
  const [idNumber, setIdNumber] = useState(inputOptions);
  const [dateOfBirth, setDateOfBirth] = useState(inputOptions);
  const [gender, setGender] = useState(inputOptions);

  const handelSave = () => {
    console.log(phoneNumber, "Phone");
    console.log(nationality, "Nationality");
    console.log(currentResidence, "current resident");
    console.log(idNumber, "id number");
    console.log(dateOfBirth, "date of birth");
    console.log(gender, "Gender");

    const newPersonalInfoData = { ...personalInfoData };
    newPersonalInfoData.currentResidence = currentResidence;
    newPersonalInfoData.phoneNumber = phoneNumber;
    newPersonalInfoData.nationality = nationality;
    newPersonalInfoData.idNumber = idNumber;
    newPersonalInfoData.dateOfBirth = dateOfBirth;
    newPersonalInfoData.gender = gender;

    setpersonalInfoData(newPersonalInfoData);
    const newApplicationData = { ...data };
    newApplicationData.data.attributes.personalInformation =
      newPersonalInfoData;

    setData(newApplicationData);
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
        />
        <TextInput
          setOptions={setCurrentResidence}
          field="Current Residence "
          options={currentResidence}
        />
        <TextInput
          setOptions={setIdNumber}
          field="ID Number"
          options={idNumber}
        />
        <TextInput
          setOptions={setDateOfBirth}
          field="Date of Birth "
          options={dateOfBirth}
        />
        <TextInput setOptions={setGender} field="Gender" options={gender} />

        <button onClick={handelSave}>Save</button>
      </FormContainer>
    </section>
  );
}
