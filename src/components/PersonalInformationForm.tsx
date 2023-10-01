import FormContainer from "./FormContainer";
import TextInput from "./formElements/TextInput";
import { CustomQuestion, InputOptions } from "../context/contextTypes";
import { useContext, useState } from "react";
import { applicationContext } from "../context/ApplicationFormProvider";
import CustomQuestionsProvider from "../context/CustomQuestionsProvider";
import CustomQuestions from "./CustomQuestion";
import AdditionalQuestions from "./AdditionalQuestions";
import AddQuestion from "./AddQuestion";

const inputOptions: InputOptions = { internalUse: false, show: false };

export default function PersonalInformationForm() {
  const { handelPersonalInformation } = useContext(applicationContext);

  const [phoneNumber, setPhoneNumber] = useState(inputOptions);
  const [nationality, setNationality] = useState(inputOptions);
  const [currentResidence, setCurrentResidence] = useState(inputOptions);
  const [idNumber, setIdNumber] = useState(inputOptions);
  const [dateOfBirth, setDateOfBirth] = useState(inputOptions);
  const [gender, setGender] = useState(inputOptions);

  const [openNewQuestion, setOpenNewQuestion] = useState<boolean>(false);
  const [additionalQuestion, setAdditionalQuestion] = useState<
    CustomQuestion[]
  >([]);

  const handelSave = () => {
    const personalInfoData = {
      firstName: inputOptions,
      lastName: inputOptions,
      emailId: inputOptions,
      currentResidence: currentResidence,
      phoneNumber: phoneNumber,
      nationality: nationality,
      idNumber: idNumber,
      dateOfBirth: dateOfBirth,
      gender: gender,
      personalQuestions: additionalQuestion,
    };
    handelPersonalInformation(personalInfoData);
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
        </button>
        <AddQuestion addQuestion={setOpenNewQuestion} />
      </FormContainer>
      {additionalQuestion.length > 0 && (
        <AdditionalQuestions
          additionalQuestion={additionalQuestion}
          handelSave={handelSave}
          form="Personal Information"
        />
      )}
      <CustomQuestionsProvider>
        {openNewQuestion && (
          <CustomQuestions
            closeNewQuestion={setOpenNewQuestion}
            additionalQuestion={additionalQuestion}
            setQuestionsArray={setAdditionalQuestion}
          />
        )}
      </CustomQuestionsProvider>
    </section>
  );
}
