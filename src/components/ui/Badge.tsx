import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import Text from './Text';
import { colors, spacing, borderRadius } from '../../constants/theme';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'small' | 'medium' | 'large';
  style?: ViewStyle;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  style,
}) => {
  const getVariantStyle = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: colors.primary,
          textColor: colors.white,
        };
      case 'secondary':
        return {
          backgroundColor: colors.secondary,
          textColor: colors.white,
        };
      case 'success':
        return {
          backgroundColor: colors.success,
          textColor: colors.white,
        };
      case 'warning':
        return {
          backgroundColor: colors.warning,
          textColor: colors.white,
        };
      case 'error':
        return {
          backgroundColor: colors.error,
          textColor: colors.white,
        };
      case 'info':
        return {
          backgroundColor: colors.info,
          textColor: colors.white,
        };
      default:
        return {
          backgroundColor: colors.primary,
          textColor: colors.white,
        };
    }
  };

  const getSizeStyle = () => {
    switch (size) {
      case 'small':
        return {
          paddingHorizontal: spacing.xs,
          paddingVertical: 2,
          minHeight: 20,
        };
      case 'medium':
        return {
          paddingHorizontal: spacing.sm,
          paddingVertical: spacing.xs,
          minHeight: 24,
        };
      case 'large':
        return {
          paddingHorizontal: spacing.md,
          paddingVertical: spacing.sm,
          minHeight: 28,
        };
      default:
        return {
          paddingHorizontal: spacing.sm,
          paddingVertical: spacing.xs,
          minHeight: 24,
        };
    }
  };

  const variantStyle = getVariantStyle();
  const sizeStyle = getSizeStyle();

  return (
    <View
      style={[
        styles.badge,
        {
          backgroundColor: variantStyle.backgroundColor,
          ...sizeStyle,
        },
        style,
      ]}
    >
      <Text
        variant="caption"
        color={variantStyle.textColor}
        align="center"
        style={styles.text}
      >
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    borderRadius: borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  text: {
    fontWeight: '600',
  },
});

export default Badge;
