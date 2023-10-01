export type InputOptions = {
  mandatory?: boolean;

  internalUse?: boolean;
  show: boolean;
};

export type CustomQuestion = {
  id: string;
  type: string;
  question: string;
  choices: string[];
  maxChoice: number;
  disqualify: boolean;
  other: boolean;
};
export type PersonalInformation = {
  firstName: InputOptions;
  lastName: InputOptions;
  emailId: InputOptions;
  phoneNumber: InputOptions;
  nationality: InputOptions;
  currentResidence: InputOptions;
  idNumber: InputOptions;
  dateOfBirth: InputOptions;
  gender: InputOptions;
  personalQuestions: CustomQuestion[];
};

export type Profile = {
  education: { mandatory: boolean; show: boolean };
  experience: { mandatory: boolean; show: boolean };
  resume: { mandatory: boolean; show: boolean };
  profileQuestions: CustomQuestion[];
};

export type fetchData = {
  data: {
    id: string;
    type: string;
    attributes: {
      coverImage: string;
      personalInformation: PersonalInformation;
      profile: Profile;
      customisedQuestions: CustomQuestion[];
    };
  };
};
export type CustomQuestionContext = {
  textInputRef: React.MutableRefObject<HTMLInputElement | null>;
  choiceRef: React.MutableRefObject<HTMLInputElement | null>;
  maxChoiceRef: React.MutableRefObject<HTMLInputElement | null>;
};
