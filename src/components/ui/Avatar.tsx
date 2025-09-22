import React from 'react';
import { View, Image, StyleSheet, ViewStyle } from 'react-native';
import Text from './Text';
import { colors, borderRadius } from '../../constants/theme';

interface AvatarProps {
  source?: { uri: string };
  name?: string;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  style?: ViewStyle;
}

const Avatar: React.FC<AvatarProps> = ({
  source,
  name,
  size = 'medium',
  style,
}) => {
  const getSizeStyle = () => {
    switch (size) {
      case 'small':
        return { width: 32, height: 32 };
      case 'medium':
        return { width: 48, height: 48 };
      case 'large':
        return { width: 64, height: 64 };
      case 'xlarge':
        return { width: 80, height: 80 };
      default:
        return { width: 48, height: 48 };
    }
  };

  const getTextSize = () => {
    switch (size) {
      case 'small':
        return 'caption';
      case 'medium':
        return 'body2';
      case 'large':
        return 'body1';
      case 'xlarge':
        return 'h4';
      default:
        return 'body2';
    }
  };

  const getInitials = () => {
    if (!name) return '?';
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const avatarStyle = [
    styles.avatar,
    getSizeStyle(),
    style,
  ];

  if (source?.uri) {
    return (
      <Image
        source={source}
        style={avatarStyle}
        resizeMode="cover"
      />
    );
  }

  return (
    <View style={[avatarStyle, styles.placeholder]}>
      <Text variant={getTextSize()} color="white" align="center">
        {getInitials()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    borderRadius: borderRadius.full,
    overflow: 'hidden',
  },
  placeholder: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Avatar;
