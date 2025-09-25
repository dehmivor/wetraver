import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackParamList } from './types';

// Import home screens
import HomeRecommendationScreen from '../screens/home/HomeRecommendationScreen';
import HomePopularSellerScreen from '../screens/home/HomePopularSellerScreen';
import HomeCreatorScreen from '../screens/home/HomeCreatorScreen';
import HomeChangeViewModeScreen from '../screens/home/HomeChangeViewModeScreen';
import HomeCardTapScreen from '../screens/home/HomeCardTapScreen';
import HomeDetailPageScreen from '../screens/home/HomeDetailPageScreen';
import HomeCommentsScreen from '../screens/home/HomeCommentsScreen';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeRecommendation"
    >
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
        }}
      />
      <Stack.Screen
        name="HomeDetailPage"
        component={HomeDetailPageScreen}
        options={{
          title: '상세 페이지',
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

export default HomeNavigator;
