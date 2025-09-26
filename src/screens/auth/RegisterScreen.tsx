import React, { useState } from 'react';
import { View, StyleSheet, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { colors, spacing } from '../../constants/theme';
import Container from '../../components/layout/Container';
import Header from '../../components/layout/Header';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../../components/ui/Button';
import Text from '../../components/ui/Text';
import FormField from '../../components/forms/FormField';

interface RegisterFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

const schema = yup.object({
  fullName: yup.string().min(2, 'Họ tên phải có ít nhất 2 ký tự').required('Vui lòng nhập họ tên'),
  email: yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
  phone: yup
    .string()
    .matches(/^[0-9]{10,11}$/, 'Số điện thoại không hợp lệ')
    .required('Vui lòng nhập số điện thoại'),
  password: yup
    .string()
    .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
    .required('Vui lòng nhập mật khẩu'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Mật khẩu xác nhận không khớp')
    .required('Vui lòng xác nhận mật khẩu'),
});

const RegisterScreen: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
  });

  const handleRegister = async (data: RegisterFormData) => {
    setLoading(true);
    try {
      // TODO: Implement actual register logic
      console.log('Register data:', data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(() => resolve(undefined), 2000));

      Alert.alert('Thành công', 'Đăng ký thành công!', [
        {
          text: 'OK',
          onPress: () => {
            // TODO: Navigate to login screen
            console.log('Navigate to login');
          },
        },
      ]);
    } catch (error) {
      Alert.alert('Lỗi', 'Đăng ký thất bại. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  const handleBackPress = () => {
    // TODO: Navigate back to login screen
    console.log('Navigate back to login');
  };

  return (
    <Container backgroundColor={colors.background}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Header title="Đăng ký" showBackButton onBackPress={handleBackPress} />

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.headerSection}>
            <Text variant="h2" color="primary" align="center">
              Tạo tài khoản
            </Text>
            <Text variant="body1" color="gray.600" align="center" style={styles.subtitle}>
              Tham gia WeTraver để khám phá thế giới
            </Text>
          </View>

          <View style={styles.formContainer}>
            <Controller
              control={control}
              name="fullName"
              render={({ field: { onChange, value } }) => (
                <FormField
                  label="Họ và tên"
                  value={value}
                  onChangeText={onChange}
                  placeholder="Nhập họ tên của bạn"
                  error={errors.fullName?.message}
                  leftIcon="person"
                  required
                />
              )}
            />

            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <FormField
                  label="Email"
                  value={value}
                  onChangeText={onChange}
                  placeholder="Nhập email của bạn"
                  error={errors.email?.message}
                  keyboardType="email-address"
                  leftIcon="email"
                  required
                />
              )}
            />

            <Controller
              control={control}
              name="phone"
              render={({ field: { onChange, value } }) => (
                <FormField
                  label="Số điện thoại"
                  value={value}
                  onChangeText={onChange}
                  placeholder="Nhập số điện thoại"
                  error={errors.phone?.message}
                  keyboardType="phone-pad"
                  leftIcon="phone"
                  required
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <FormField
                  label="Mật khẩu"
                  value={value}
                  onChangeText={onChange}
                  placeholder="Nhập mật khẩu"
                  error={errors.password?.message}
                  secureTextEntry
                  required
                />
              )}
            />

            <Controller
              control={control}
              name="confirmPassword"
              render={({ field: { onChange, value } }) => (
                <FormField
                  label="Xác nhận mật khẩu"
                  value={value}
                  onChangeText={onChange}
                  placeholder="Nhập lại mật khẩu"
                  error={errors.confirmPassword?.message}
                  secureTextEntry
                  required
                />
              )}
            />

            <Button
              title="Đăng ký"
              onPress={handleSubmit(handleRegister)}
              loading={loading}
              style={styles.submitButton}
            />
          </View>

          <View style={styles.footer}>
            <Text variant="body2" color="gray.600" align="center">
              Đã có tài khoản?{' '}
            </Text>
            <Button
              title="Đăng nhập ngay"
              variant="ghost"
              onPress={handleBackPress}
              style={styles.loginButton}
            />
          </View>
        </ScrollView>
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
  },
  headerSection: {
    marginTop: spacing.xl,
    marginBottom: spacing['2xl'],
    paddingHorizontal: spacing.lg,
  },
  subtitle: {
    marginTop: spacing.sm,
  },
  formContainer: {
    paddingHorizontal: spacing.lg,
  },
  submitButton: {
    marginTop: spacing.lg,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.xl,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.xl,
  },
  loginButton: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
});

export default RegisterScreen;
