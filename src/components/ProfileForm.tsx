import { useContext, useState } from "react";
import { applicationContext } from "../context/ApplicationFormProvider";
import { InputOptions } from "../context/contextTypes";
import AddQuestion from "./AddQuestion";
import CustomQuestions from "./CustomQuestion";
import FormContainer from "./FormContainer";
import TextInput from "./formElements/TextInput";

const inputOptions: InputOptions = { mandatory: false, show: false };

export default function ProfileForm() {
  const { data, handelProfile } = useContext(applicationContext);

  const [education, setEducation] = useState(inputOptions);
  const [experience, setExperience] = useState(inputOptions);
  const [resume, setResume] = useState(inputOptions);
  const [openNewQuestion, setOpenNewQuestion] = useState<boolean>(false);
  //---------------------------------------------
  //---------------------------------------------
  //---------------------------------------------
  interface QuestionProps {
    type?: string;
    question?: string;
  }
  const [questionValue, setQuestionValue] = useState<string>("");
  const [questionsArray, setQuestionsArray] = useState<QuestionProps[]>([]);

  //---------------------------------------------
  //---------------------------------------------

  const handelSave = () => {
    const profileData = data?.data.attributes?.profile;
    const newProfileData = { ...profileData };

    newProfileData.education = education;
    newProfileData.experience = experience;
    newProfileData.resume = resume;

    //setPersonalInfoData(newPersonalInfoData);

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
        </button>{" "}
        <AddQuestion addQuestion={setOpenNewQuestion} />
      </FormContainer>
      {openNewQuestion && (
        <CustomQuestions
          deleteQuestions={setOpenNewQuestion}
          setQuestionValue={setQuestionValue}
          setQuestionsArray={setQuestionsArray}
          questionsArray={questionsArray}
          questionValue={questionValue}
        />
      )}
    </section>
  );
}
