import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Auth screens
import LoginScreen from '../screens/auth/LoginScreen';
import JoinMembershipScreen from '../screens/auth/JoinMembershipScreen';
import JoinMembershipPhoneNumberScreen from '../screens/auth/JoinMembershipPhoneNumberScreen';
import JoinMembershipPhoneNumberCheckScreen from '../screens/auth/JoinMembershipPhoneNumberCheckScreen';
import JoinMembershipEmailScreen from '../screens/auth/JoinMembershipEmailScreen';
import JoinMembershipEmailCheckScreen from '../screens/auth/JoinMembershipEmailCheckScreen';
import JoinMembershipVerificationScreen from '../screens/auth/JoinMembershipVerificationScreen';

export type AuthStackParamList = {
  Login: undefined;
  JoinMembership: undefined;
  JoinMembershipPhoneNumber: undefined;
  JoinMembershipPhoneNumberCheck: undefined;
  JoinMembershipEmail: undefined;
  JoinMembershipEmailCheck: undefined;
  JoinMembershipVerification: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerTintColor: '#111827',
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="JoinMembership"
        component={JoinMembershipScreen}
        options={{ title: '회원가입 약관 동의', headerShown: true }}
      />
      <Stack.Screen
        name="JoinMembershipPhoneNumber"
        component={JoinMembershipPhoneNumberScreen}
        options={{ title: '신규 회원 가입' }}
      />
      <Stack.Screen
        name="JoinMembershipPhoneNumberCheck"
        component={JoinMembershipPhoneNumberCheckScreen}
        options={{ title: '전화번호 인증하기' }}
      />
      <Stack.Screen
        name="JoinMembershipEmail"
        component={JoinMembershipEmailScreen}
        options={{ title: '신규 회원 가입' }}
      />
      <Stack.Screen
        name="JoinMembershipEmailCheck"
        component={JoinMembershipEmailCheckScreen}
        options={{ title: '이메일 인증하기' }}
      />
      <Stack.Screen
        name="JoinMembershipVerification"
        component={JoinMembershipVerificationScreen}
        options={{ title: '가입 완료하기' }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
