import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from './src/screens/splash/SplashScreen'; // Đường dẫn đến SplashScreen
import LoginScreen from './src/screens/auth/LoginScreen'; // Giả sử đường dẫn đến LoginScreen – điều chỉnh nếu khác

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
      <LoginScreen /> {/* Render LoginScreen sau splash */}
    </SafeAreaProvider>
  );
}

export default App;