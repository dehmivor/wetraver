import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import Input from '../ui/Input';
import Text from '../ui/Text';
import { spacing } from '../../constants/theme';

interface FormFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  error?: string;
  required?: boolean;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  multiline?: boolean;
  numberOfLines?: number;
  disabled?: boolean;
  leftIcon?: string;
  rightIcon?: string;
  onRightIconPress?: () => void;
  style?: ViewStyle;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  error,
  required = false,
  secureTextEntry = false,
  keyboardType = 'default',
  multiline = false,
  numberOfLines = 1,
  disabled = false,
  leftIcon,
  rightIcon,
  onRightIconPress,
  style,
}) => {
  const displayLabel = required ? `${label} *` : label;

  return (
    <View style={[styles.container, style]}>
      <Text variant="body2" color="gray.700" style={styles.label}>
        {displayLabel}
      </Text>
      <Input
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        error={error}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        multiline={multiline}
        numberOfLines={numberOfLines}
        disabled={disabled}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        onRightIconPress={onRightIconPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },
  label: {
    marginBottom: spacing.xs,
    fontWeight: '600',
  },
});

export default FormField;
