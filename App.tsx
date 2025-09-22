import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from './src/screens/splash/SplashScreen';
import AuthNavigator from './src/navigation/authNavigator';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => {
    setShowSplash(false); // Sửa: Set false để kết thúc splash
  };

  if (showSplash) {
    return <SplashScreen onFinish={handleSplashFinish} />; // Render splash đầu tiên
  }

  return (
    <SafeAreaProvider>
      <AuthNavigator />
    </SafeAreaProvider>
  );
}

export default App;