export type InputOptions = {
  internalUse?: boolean;
  mandatory?: boolean;
  show: boolean;
};

type CustomQuestions = {
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
  personalQuestions: CustomQuestions[];
};

export type Profile = {
  education: { mandatory: boolean; show: boolean };
  experience: { mandatory: boolean; show: boolean };
  resume: { mandatory: boolean; show: boolean };
  profileQuestions: CustomQuestions[];
};

export type fetchData = {
  data: {
    id: string;
    type: string;
    attributes: {
      coverImage: string;
      personalInformation: PersonalInformation;
      profile: Profile;
      customisedQuestions: CustomQuestions[];
    };
  };
};
