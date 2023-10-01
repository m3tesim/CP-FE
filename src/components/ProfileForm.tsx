import { useContext, useState } from "react";
import { applicationContext } from "../context/ApplicationFormProvider";
import { CustomQuestion, InputOptions } from "../context/contextTypes";
import CustomQuestionsProvider from "../context/CustomQuestionsProvider";
import AdditionalQuestions from "./AdditionalQuestions";
import AddQuestion from "./AddQuestion";
import CustomQuestions from "./CustomQuestion";
import FormContainer from "./FormContainer";
import TextInput from "./formElements/TextInput";

const inputOptions: InputOptions = { mandatory: false, show: false };

export default function ProfileForm() {
  const { handelProfile } = useContext(applicationContext);

  const [education, setEducation] = useState(inputOptions);
  const [experience, setExperience] = useState(inputOptions);
  const [resume, setResume] = useState(inputOptions);
  const [openNewQuestion, setOpenNewQuestion] = useState<boolean>(false);

  const [additionalQuestion, setAdditionalQuestion] = useState<
    CustomQuestion[]
  >([]);

  const handelSave = () => {
    const newProfileData = {
      education: education,
      experience: experience,
      resume: resume,
      profileQuestions: additionalQuestion,
    };
    handelProfile(newProfileData);
  };

  return (
    <section>
      <FormContainer title="Profile">
        <TextInput
          field="Education"
          options={education}
          setOptions={setEducation}
          text="Mandatory"
        />
        <TextInput
          field="Experience"
          options={experience}
          setOptions={setExperience}
          text="Mandatory"
        />
        <TextInput
          field="Resume"
          options={resume}
          setOptions={setResume}
          text="Mandatory"
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
          form="Profile"
          handelSave={handelSave}
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
