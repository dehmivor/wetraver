import React from 'react';
import { TextProps, TextStyle } from 'react-native';
import Text from './Text';
import { textStyles } from '../../constants/textStyles';

interface TypographyProps extends TextProps {
  variant?: keyof typeof textStyles;
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  children,
  style,
  ...props
}) => {
  const baseStyle = textStyles[variant];

  const combinedStyle = Object.assign(
    {},
    ...(Array.isArray(style) ? [baseStyle, ...style] : [baseStyle, style]),
  );

  return (
    <Text style={combinedStyle} {...props}>
      {children}
    </Text>
  );
};

// Specific Typography Components
export const H1: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="heading1" {...props} />
);

export const H2: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="heading2" {...props} />
);

export const H3: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="heading3" {...props} />
);

export const Body: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="body" {...props} />
);

export const BodyMedium: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="bodyMedium" {...props} />
);

export const Caption: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="caption" {...props} />
);

export const ButtonText: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="button" {...props} />
);

export const Label: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="label" {...props} />
);

// Component với style theo yêu cầu của bạn
export const PretendardText: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="pretendardStyle" {...props} />
);

export default Typography;
