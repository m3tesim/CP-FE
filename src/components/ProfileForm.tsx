import React, { useContext, useState } from "react";
import { applicationContext } from "../context/ApplicationFormProvider";
import { InputOptions } from "../context/contextTypes";
import FormContainer from "./FormContainer";
import TextInput from "./formElements/TextInput";

const inputOptions: InputOptions = { mandatory: false, show: false };

export default function ProfileForm() {
  const { data, handelProfile } = useContext(applicationContext);

  const [education, setEducation] = useState(inputOptions);
  const [experience, setExperience] = useState(inputOptions);
  const [resume, setResume] = useState(inputOptions);

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
        <button onClick={handelSave}>Save</button>
      </FormContainer>
    </section>
  );
}
