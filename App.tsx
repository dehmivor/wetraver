import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthNavigator from './src/navigation/AuthNavigator';
import HomeNavigator from './src/navigation/HomeNavigator';
import SplashScreen from './src/screens/splash/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true); // Bật lại splash screen

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onFinish={handleSplashFinish} />;
  }

  return (
      <SafeAreaProvider>
        <NavigationContainer>
          <HomeNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
  );
}

export default App;