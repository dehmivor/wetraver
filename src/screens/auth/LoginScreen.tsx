import React, { useState } from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Container from '../../components/layout/Container';
import Text from '../../components/ui/Text';
import { spacing } from '../../constants/theme';
import { useNavigation } from '@react-navigation/native';

const LoginScreen: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleRegisterPress = () => {
    navigation.navigate('JoinMembership' as never);
  };

  const handleExploreBeforeLogin = () => {
    navigation.navigate('HomeRecommendation' as never);
  };

  return (
    <ImageBackground
      source={require('../../assets/images/background-login.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.dimmed} />

      <KeyboardAvoidingView style={styles.keyboardAvoid}>
        <View style={styles.content}>
          {/* Header Section with Title and Badge */}
          <View style={styles.headerSection}>
            <View style={styles.titleRow}>
              <Text variant="h1" color="white" align="center" style={styles.title}>
                WETRAVER
              </Text>
              {/* Replace View with UisComment */}
              {/* <UisComment 
                  color="white" 
                  size={20} 
                  style={styles.titleIcon} 
                /> */}
            </View>
          </View>

          {/* Content Section - positioned lower */}
          <View style={styles.bottomContent}>
            <Text
              variant="body1"
              color="rgba(255,255,255,0.9)"
              align="center"
              style={styles.subtitle}
            >
              바쁜 일상 속 잠깐의 쉼표가 필요할 때,
            </Text>
            <Text
              variant="body1"
              color="rgba(255,255,255,0.9)"
              align="center"
              style={styles.subtitle}
            >
              내 하루를 조금 더 특별하게 만드는 시작.
            </Text>

            <TouchableOpacity
              style={styles.registerButton}
              onPress={handleRegisterPress}
              activeOpacity={0.7}
            >
              <Text variant="button" color="white" align="center" style={styles.registerButtonText}>
                회원 가입하기
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleExploreBeforeLogin} activeOpacity={0.7}>
              <Text
                variant="caption"
                color="rgba(255, 255, 255, 0.8)"
                align="center"
                style={styles.exploreText}
              >
                로그인 전 둘러보기 ›
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  dimmed: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#001E33',
    opacity: 0.7,
  },
  keyboardAvoid: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    justifyContent: 'space-between',
    paddingTop: verticalScale(90),
    paddingBottom: verticalScale(60),
  },
  headerSection: {
    alignItems: 'center',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Pretendard',
    fontWeight: '500',
    textTransform: 'uppercase',
    fontSize: moderateScale(26),
    lineHeight: moderateScale(26),
    letterSpacing: moderateScale(1.04),
  },
  titleIcon: {
    marginLeft: scale(8),
    transform: [{ rotate: '-15deg' }], // Lean 15% to the left
  },
  bottomContent: {
    alignItems: 'center',
    paddingBottom: verticalScale(40),
  },
  subtitle: {
    marginTop: verticalScale(4),
    marginBottom: verticalScale(4),
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
    fontSize: moderateScale(15),
    lineHeight: verticalScale(20),
  },
  registerButton: {
    borderWidth: 1.5,
    borderColor: 'white',
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(90),
    borderRadius: scale(8),
    marginTop: verticalScale(32),
    marginBottom: verticalScale(40),
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  registerButtonText: {
    fontWeight: 'bold',
    fontSize: moderateScale(16),
  },
  exploreText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '500',
    fontSize: moderateScale(15),
  },
});

export default LoginScreen;
