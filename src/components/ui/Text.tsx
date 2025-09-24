import React from 'react';
import { Text as RNText, StyleSheet, TextStyle, TextProps as RNTextProps } from 'react-native';
import { colors, typography } from '../../constants/theme';

interface TextProps extends RNTextProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body1' | 'body2' | 'caption' | 'button';
  color?: keyof typeof colors | string;
  align?: 'left' | 'center' | 'right';
  weight?: 'normal' | 'medium' | 'bold';
  style?: TextStyle;
}

const Text: React.FC<TextProps> = ({
  children,
  variant = 'body1',
  color = 'gray.900',
  align = 'left',
  weight,
  style,
  numberOfLines,
  ...rest
}) => {
  const getVariantStyle = (): TextStyle => {
    switch (variant) {
      case 'h1':
        return {
          fontSize: typography.fontSize['4xl'],
          lineHeight: typography.lineHeight['4xl'],
          fontWeight: 'bold',
        };
      case 'h2':
        return {
          fontSize: typography.fontSize['3xl'],
          lineHeight: typography.lineHeight['3xl'],
          fontWeight: 'bold',
        };
      case 'h3':
        return {
          fontSize: typography.fontSize['2xl'],
          lineHeight: typography.lineHeight['2xl'],
          fontWeight: 'bold',
        };
      case 'h4':
        return {
          fontSize: typography.fontSize.xl,
          lineHeight: typography.lineHeight.xl,
          fontWeight: 'bold',
        };
      case 'body1':
        return {
          fontSize: typography.fontSize.base,
          lineHeight: typography.lineHeight.base,
          fontWeight: 'normal',
        };
      case 'body2':
        return {
          fontSize: typography.fontSize.sm,
          lineHeight: typography.lineHeight.sm,
          fontWeight: 'normal',
        };
      case 'caption':
        return {
          fontSize: typography.fontSize.xs,
          lineHeight: typography.lineHeight.xs,
          fontWeight: 'normal',
        };
      case 'button':
        return {
          fontSize: typography.fontSize.base,
          lineHeight: typography.lineHeight.base,
          fontWeight: '600',
        };
      default:
        return {};
    }
  };

  const getColorStyle = (): TextStyle => {
    if (typeof color === 'string' && color.includes('.')) {
      const [colorName, shade] = color.split('.');
      return { color: (colors as any)[colorName]?.[shade] || color };
    }
    return { color: (colors as any)[color] || color };
  };

  const getWeightStyle = (): TextStyle => {
    if (weight) {
      return { fontWeight: weight };
    }
    return {};
  };

  return (
    <RNText
      style={[
        styles.base,
        getVariantStyle(),
        getColorStyle(),
        getWeightStyle(),
        { textAlign: align },
        style,
      ]}
      numberOfLines={numberOfLines}
      {...rest}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  base: {
    fontFamily: typography.fontFamily.regular,
  },
});

export default Text;
