import React, { useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  Dimensions,
  Animated,
  Text,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing } from '../../constants/theme';

const { width, height } = Dimensions.get('window');

interface SplashScreenProps {
  onFinish?: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    // Animation cho logo và text
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
    ]).start();

    // Tự động chuyển màn hình sau 3 giây
    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        onFinish?.();
      });
    }, 2500);

    return () => clearTimeout(timer);
  }, [fadeAnim, scaleAnim, onFinish]);

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.white}
        translucent={false}
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          {/* Logo */}
          <Animated.View
            style={[
              styles.logoContainer,
              {
                opacity: fadeAnim,
                transform: [{ scale: scaleAnim }],
              },
            ]}
          >
            <Image
              source={require('../../assets/images/logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </Animated.View>
          
          {/* Brand Text */}
          <Animated.View
            style={[
              styles.brandContainer,
              {
                opacity: fadeAnim,
                transform: [{ scale: scaleAnim }],
              },
            ]}
          >
            <Text style={styles.brandText}>
              WETRAVER
            </Text>
          </Animated.View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    position: 'relative',
  },
  logoContainer: {
    position: 'absolute',
    // Tính toán tỷ lệ từ thiết kế Figma (393x852) sang màn hình thực tế
    top: (260 / 852) * height, // 260px từ top trong thiết kế 852px
    left: (120 / 393) * width,  // 120px từ left trong thiết kế 393px
  },
  logo: {
    // Tính toán kích thước tỷ lệ từ thiết kế Figma
    width: (153 / 393) * width,   // 153px trong thiết kế 393px
    height: (109 / 393) * width,  // 109px, giữ tỷ lệ theo width để responsive
  },
  brandContainer: {
    position: 'absolute',
    bottom: height * 0.15, // 15% từ bottom
    alignItems: 'center',
    width: '100%',
  },
  brandText: {
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 1.5,
    color: colors.gray[800],
    textAlign: 'center',
    fontFamily: 'Pretendard-Regular',
    textTransform: 'uppercase',
  },
});

export default SplashScreen;
