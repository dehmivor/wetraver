import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

// Import screens directly (not navigators with NavigationContainer)
import LoginScreen from '../screens/auth/LoginScreen';
import JoinMembershipScreen from '../screens/auth/JoinMembershipScreen';
import JoinMembershipPhoneNumberScreen from '../screens/auth/JoinMembershipPhoneNumberScreen';
import JoinMembershipPhoneNumberCheckScreen from '../screens/auth/JoinMembershipPhoneNumberCheckScreen';
import JoinMembershipEmailScreen from '../screens/auth/JoinMembershipEmailScreen';
import JoinMembershipEmailCheckScreen from '../screens/auth/JoinMembershipEmailCheckScreen';
import JoinMembershipVerificationScreen from '../screens/auth/JoinMembershipVerificationScreen';

// Import Home screens
import HomeRecommendationScreen from '../screens/home/HomeRecommendationScreen';
import HomePopularSellerScreen from '../screens/home/HomePopularSellerScreen';
import HomeCreatorScreen from '../screens/home/HomeCreatorScreen';
import HomeChangeViewModeScreen from '../screens/home/HomeChangeViewModeScreen';
import HomeCardTapScreen from '../screens/home/HomeCardTapScreen';
import HomeDetailPageScreen from '../screens/home/HomeDetailPageScreen';
import HomeCommentsScreen from '../screens/home/HomeCommentsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
 <Stack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarStyle: 'dark', // or remove if mismatched version
      }}
      initialRouteName="Login"
    > 
      {/* Auth Screens */}
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Login',
        }}
      />
      <Stack.Screen
        name="JoinMembership"
        component={JoinMembershipScreen}
        options={{
          title: '약관동의',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="JoinMembershipPhoneNumber"
        component={JoinMembershipPhoneNumberScreen}
        options={{
          title: '신규 회원 가입',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="JoinMembershipPhoneNumberCheck"
        component={JoinMembershipPhoneNumberCheckScreen}
        options={{
          title: '신규 회원 가입',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="JoinMembershipEmail"
        component={JoinMembershipEmailScreen}
        options={{
          title: '전화번호 인증하기',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="JoinMembershipEmailCheck"
        component={JoinMembershipEmailCheckScreen}
        options={{
          title: '이메일 인증하기',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="JoinMembershipVerification"
        component={JoinMembershipVerificationScreen}
        options={{
          title: '가입 완료하기',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />

      {/* Home Screens */}
      <Stack.Screen
        name="HomeRecommendation"
        component={HomeRecommendationScreen}
        options={{
          title: '추천',
        }}
      />
      <Stack.Screen
        name="HomePopularSeller"
        component={HomePopularSellerScreen}
        options={{
          title: '인기셀러',
        }}
      />
      <Stack.Screen
        name="HomeCreator"
        component={HomeCreatorScreen}
        options={{
          title: '크리에이터',
        }}
      />
      <Stack.Screen
        name="HomeChangeViewMode"
        component={HomeChangeViewModeScreen}
        options={{
          title: '뷰 모드 변경',
        }}
      />
      <Stack.Screen
        name="HomeCardTap"
        component={HomeCardTapScreen}
        options={{
          title: '카드 탭',
        statusBarStyle: 'light',
        }}
      />
      <Stack.Screen
  name="HomeDetailPage"
  component={HomeDetailPageScreen}
  options={{
    title: '상세 페이지',
    animation: 'slide_from_bottom',   // 👈 makes the transition come from bottom
    // presentation: 'modal',         // optional → iOS modal style
    headerShown: false,               // optional if you don’t want header
  }}
/>
      <Stack.Screen
        name="HomeComments"
        component={HomeCommentsScreen}
        options={{
          title: '댓글',
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
