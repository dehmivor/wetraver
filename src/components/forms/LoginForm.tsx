import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { spacing } from '../../constants/theme';
import Button from '../ui/Button';
import FormField from './FormField';

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginFormProps {
  onSubmit: (data: LoginFormData) => void;
  loading?: boolean;
}

const schema = yup.object({
  email: yup
    .string()
    .email('Email không hợp lệ')
    .required('Vui lòng nhập email'),
  password: yup
    .string()
    .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
    .required('Vui lòng nhập mật khẩu'),
});

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, loading = false }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleFormSubmit = (data: LoginFormData) => {
    onSubmit(data);
  };

  return (
    <View style={styles.container}>
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
        name="password"
        render={({ field: { onChange, value } }) => (
          <FormField
            label="Mật khẩu"
            value={value}
            onChangeText={onChange}
            placeholder="Nhập mật khẩu của bạn"
            error={errors.password?.message}
            secureTextEntry
            required
          />
        )}
      />

      <Button
        title="Đăng nhập"
        onPress={handleSubmit(handleFormSubmit)}
        loading={loading}
        style={styles.submitButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
  },
  submitButton: {
    marginTop: spacing.lg,
  },
});

export default LoginForm;
