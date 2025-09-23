import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

// Import navigators
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Auth"
    >
      <Stack.Screen 
        name="Auth" 
        component={AuthNavigator}
        options={{
          title: 'Authentication',
        }}
      />
      <Stack.Screen 
        name="Home" 
        component={HomeNavigator}
        options={{
          title: 'Home',
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
