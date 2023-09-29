export type InputOptions = {
  internalUse: boolean;
  show: boolean;
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
  personalQuestions: {
    id: string;
    type: string;
    question: string;
    choices: [string];
    maxChoice: number;
    disqualify: boolean;
    other: boolean;
  }[];
};

export type Profile = {
  education: { mandatory: boolean; show: boolean };
  experience: { mandatory: boolean; show: boolean };
  resume: { mandatory: boolean; show: boolean };
  profileQuestions: [
    {
      id: string;
      type: string;
      question: string;
      choices: [string];
      maxChoice: number;
      disqualify: boolean;
      other: boolean;
    }
  ];
};

export type CustomisedQuestions = {
  id: string;
  type: string;
  question: string;
  choices: [string];
  maxChoice: number;
  disqualify: boolean;
  other: boolean;
};

export type fetchData = {
  data: {
    id: string;
    type: string;
    attributes: {
      coverImage: string;
      personalInformation: PersonalInformation;
      profile: Profile;
      customisedQuestions: CustomisedQuestions[];
    };
  };
};
