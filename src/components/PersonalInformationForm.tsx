import FormContainer from "./FormContainer";
import TextInput from "./formElements/TextInput";
import { PersonalInformation, InputOptions } from "../context/contextTypes";
import { useContext, useState } from "react";
import { applicationContext } from "../context/ApplicationFormProvider";

const inputOptions: InputOptions = { internalUse: false, show: false };

export default function PersonalInformationForm() {
  const { data, handelPersonalInformation } = useContext(applicationContext);
  const [personalInfoData, setPersonalInfoData] = useState(
    data?.data.attributes?.personalInformation as PersonalInformation
  );
  const [phoneNumber, setPhoneNumber] = useState(inputOptions);
  const [nationality, setNationality] = useState(inputOptions);
  const [currentResidence, setCurrentResidence] = useState(inputOptions);
  const [idNumber, setIdNumber] = useState(inputOptions);
  const [dateOfBirth, setDateOfBirth] = useState(inputOptions);
  const [gender, setGender] = useState(inputOptions);

  const handelSave = () => {
    const newPersonalInfoData = { ...personalInfoData };
    newPersonalInfoData.currentResidence = currentResidence;
    newPersonalInfoData.phoneNumber = phoneNumber;
    newPersonalInfoData.nationality = nationality;
    newPersonalInfoData.idNumber = idNumber;
    newPersonalInfoData.dateOfBirth = dateOfBirth;
    newPersonalInfoData.gender = gender;

    setPersonalInfoData(newPersonalInfoData);

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

        <button onClick={handelSave}>Save</button>
      </FormContainer>
    </section>
  );
}
