import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing } from '../../constants/theme';

interface ContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
  safeArea?: boolean;
  backgroundColor?: string;
  padding?: 'none' | 'small' | 'medium' | 'large';
}

const Container: React.FC<ContainerProps> = ({
  children,
  style,
  safeArea = true,
  backgroundColor = colors.background,
  padding = 'medium',
}) => {
  const getPaddingStyle = () => {
    switch (padding) {
      case 'none':
        return {};
      case 'small':
        return { padding: spacing.sm };
      case 'medium':
        return { padding: spacing.md };
      case 'large':
        return { padding: spacing.lg };
      default:
        return { padding: spacing.md };
    }
  };

  const containerStyle = [styles.container, { backgroundColor }, getPaddingStyle(), style];

  if (safeArea) {
    return <SafeAreaView style={containerStyle}>{children}</SafeAreaView>;
  }

  return <View style={containerStyle}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Container;
