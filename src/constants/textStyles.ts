import { StyleSheet, TextStyle } from 'react-native';
import { typography, colors } from './theme';

// Helper function to calculate letter spacing as percentage of font size
const calculateLetterSpacing = (fontSize: number, percentage: number): number => {
  return (fontSize * percentage) / 100;
};

// Helper function to calculate line height as percentage of font size
const calculateLineHeight = (fontSize: number, percentage: number): number => {
  return (fontSize * percentage) / 100;
};

export const textStyles = StyleSheet.create({
  // Style theo yêu cầu của bạn
  pretendardStyle: {
    fontFamily: typography.fontFamily.regular,
    fontWeight: typography.fontWeight.regular,
    fontSize: 16,
    lineHeight: calculateLineHeight(16, 100), // 100% of font-size
    letterSpacing: calculateLetterSpacing(16, 4), // 4% of font-size
    textAlign: 'center',
    textTransform: 'uppercase',
    color: colors.black,
  } as TextStyle,

  // Các style khác với Pretendard
  heading1: {
    fontFamily: typography.fontFamily.bold,
    fontWeight: typography.fontWeight.bold,
    fontSize: typography.fontSize['3xl'],
    lineHeight: typography.lineHeight['3xl'],
    letterSpacing: typography.letterSpacing.tight,
    color: colors.black,
  } as TextStyle,

  heading2: {
    fontFamily: typography.fontFamily.semiBold,
    fontWeight: typography.fontWeight.semiBold,
    fontSize: typography.fontSize['2xl'],
    lineHeight: typography.lineHeight['2xl'],
    letterSpacing: typography.letterSpacing.normal,
    color: colors.black,
  } as TextStyle,

  heading3: {
    fontFamily: typography.fontFamily.semiBold,
    fontWeight: typography.fontWeight.semiBold,
    fontSize: typography.fontSize.xl,
    lineHeight: typography.lineHeight.xl,
    letterSpacing: typography.letterSpacing.normal,
    color: colors.black,
  } as TextStyle,

  body: {
    fontFamily: typography.fontFamily.regular,
    fontWeight: typography.fontWeight.regular,
    fontSize: typography.fontSize.base,
    lineHeight: typography.lineHeight.base,
    letterSpacing: typography.letterSpacing.normal,
    color: colors.gray[700],
  } as TextStyle,

  bodyMedium: {
    fontFamily: typography.fontFamily.medium,
    fontWeight: typography.fontWeight.medium,
    fontSize: typography.fontSize.base,
    lineHeight: typography.lineHeight.base,
    letterSpacing: typography.letterSpacing.normal,
    color: colors.gray[700],
  } as TextStyle,

  caption: {
    fontFamily: typography.fontFamily.regular,
    fontWeight: typography.fontWeight.regular,
    fontSize: typography.fontSize.sm,
    lineHeight: typography.lineHeight.sm,
    letterSpacing: typography.letterSpacing.wide,
    color: colors.gray[500],
  } as TextStyle,

  button: {
    fontFamily: typography.fontFamily.medium,
    fontWeight: typography.fontWeight.medium,
    fontSize: typography.fontSize.base,
    lineHeight: typography.lineHeight.base,
    letterSpacing: typography.letterSpacing.wide,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: colors.white,
  } as TextStyle,

  label: {
    fontFamily: typography.fontFamily.medium,
    fontWeight: typography.fontWeight.medium,
    fontSize: typography.fontSize.sm,
    lineHeight: typography.lineHeight.sm,
    letterSpacing: typography.letterSpacing.normal,
    color: colors.gray[700],
  } as TextStyle,
});

// Export individual styles for easy access
export const {
  pretendardStyle,
  heading1,
  heading2,
  heading3,
  body,
  bodyMedium,
  caption,
  button,
  label,
} = textStyles;
