import React, { useState } from 'react';
import { View, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { colors, spacing } from '../../constants/theme';
import Container from '../../components/layout/Container';
import Header from '../../components/layout/Header';
import LoginForm from '../../components/forms/LoginForm';
import Button from '../../components/ui/Button';
import Text from '../../components/ui/Text';

interface LoginFormData {
  email: string;
  password: string;
}

const LoginScreen: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (data: LoginFormData) => {
    setLoading(true);
    try {
      // TODO: Implement actual login logic
      console.log('Login data:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(() => resolve(undefined), 2000));
      
      Alert.alert('Thành công', 'Đăng nhập thành công!');
    } catch (error) {
      Alert.alert('Lỗi', 'Đăng nhập thất bại. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterPress = () => {
    // TODO: Navigate to register screen
    console.log('Navigate to register');
  };

  return (
    <Container backgroundColor={colors.background}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Header title="Đăng nhập" />
        
        <View style={styles.content}>
          <View style={styles.headerSection}>
            <Text variant="h1" color="primary" align="center">
              WeTraver
            </Text>
            <Text variant="body1" color="gray.600" align="center" style={styles.subtitle}>
              Khám phá thế giới cùng chúng tôi
            </Text>
          </View>

          <LoginForm onSubmit={handleLogin} loading={loading} />

          <View style={styles.footer}>
            <Text variant="body2" color="gray.600" align="center">
              Chưa có tài khoản?{' '}
            </Text>
            <Button
              title="Đăng ký ngay"
              variant="ghost"
              onPress={handleRegisterPress}
              style={styles.registerButton}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  headerSection: {
    marginBottom: spacing['3xl'],
    paddingHorizontal: spacing.lg,
  },
  subtitle: {
    marginTop: spacing.sm,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.xl,
    paddingHorizontal: spacing.lg,
  },
  registerButton: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
});

export default LoginScreen;
