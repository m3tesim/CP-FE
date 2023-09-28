export type PersonalInformation = {
  firstName: { internalUse: boolean; show: boolean };
  lastName: { internalUse: boolean; show: boolean };
  emailId: { internalUse: boolean; show: boolean };
  phoneNumber: { internalUse: boolean; show: boolean };
  nationality: { internalUse: boolean; show: boolean };
  currentResidence: { internalUse: boolean; show: boolean };
  idNumber: { internalUse: boolean; show: boolean };
  dateOfBirth: { internalUse: boolean; show: boolean };
  gender: { internalUse: boolean; show: boolean };
  personalQuestions: [
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

export type CustomisedQuestions = [
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

export type fetchData = {
  id: string;
  type: string;
  attributes: {
    coverImage: string;
    personalInformation: PersonalInformation;
    profile: Profile;
    customisedQuestions: CustomisedQuestions;
  };
};
