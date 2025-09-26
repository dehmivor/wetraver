export type RootStackParamList = {
  // Auth screens
  Login: undefined;
  JoinMembership: undefined;
  JoinMembershipPhoneNumber: undefined;
  JoinMembershipPhoneNumberCheck: undefined;
  JoinMembershipEmail: undefined;
  JoinMembershipEmailCheck: undefined;
  JoinMembershipVerification: undefined;
  Onboarding: undefined;
  // Home screens
  HomeRecommendation: undefined;
  HomePopularSeller: undefined;
  HomeCreator: undefined;
  HomeChangeViewMode: undefined;
  HomeCardTap: {
    modeId?: string;
    card?: any; // 👈 add card here
  };
  HomeDetailPage: undefined;
  HomeComments: undefined;
};

export type MainStackParamList = {
  Auth: undefined;
  Main: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  JoinMembership: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Profile: undefined;
};

export type HomeStackParamList = {
  HomeRecommendation: undefined;
  HomePopularSeller: undefined;
  HomeCreator: undefined;
  HomeChangeViewMode: undefined;
  HomeCardTap: { modeId?: string } | undefined;
  HomeDetailPage: undefined;
  HomeComments: undefined;
};
