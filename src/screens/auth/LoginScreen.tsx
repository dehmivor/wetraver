import React, { useState } from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
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
    console.log('Explore before login');
  };

  return (
    <Container>
      <ImageBackground
        source={require('../../assets/images/background-login.jpg')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.dimmed} />

        <KeyboardAvoidingView
          style={styles.keyboardAvoid}
        >
          <View style={styles.content}>
            <View style={styles.headerSection}>
              <View style={styles.titleRow}>
                <Text variant="h1" color="white" align="center" style={styles.title}>
                  WETRAVER
                </Text>
              </View>
              <Text variant="body1" color="rgba(255,255,255,0.8)" align="center" style={styles.subtitle}>
                바쁜 일상 속 잠깐의 쉼표가 필요할 때,
              </Text>
              <Text variant="body1" color="rgba(255,255,255,0.8)" align="center" style={styles.subtitle}>
                내 하루를 조금 더 특별하게 만드는 시작.
              </Text>
            </View>

            <TouchableOpacity
              style={styles.registerButton}
              onPress={handleRegisterPress}
              activeOpacity={0.7}
            >
              <Text variant="button" color="white" align="center" style={styles.registerButtonText}>
                회원 가입하기
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleExploreBeforeLogin}
              activeOpacity={0.7}
            >
              <Text
                variant="caption"
                color="rgba(255,255,255,0.6)"
                align="center"
                style={styles.exploreText}
              >
                로그인 전 둘러보기 &gt;
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </Container>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  dimmed: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#001E33',
    opacity: 0.6,
  },
  keyboardAvoid: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    paddingHorizontal: spacing.lg,
  },
  headerSection: {
    marginBottom: spacing['xl'],
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    marginTop: 120
  },
  titleBadge: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    marginLeft: 8,
  },
  subtitle: {
    marginTop: 8,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  registerButton: {
    borderWidth: 1,
    borderColor: 'white',
    paddingVertical: 12,
    borderRadius: 6,
    marginBottom: spacing.md,
  },
  registerButtonText: {
    fontWeight: 'bold',
  },
  exploreText: {
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
