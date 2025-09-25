import React from 'react';
import { View, StyleSheet, ViewStyle, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors, spacing, shadows } from '../../constants/theme';
import Text from '../ui/Text';
import Button from '../ui/Button';

interface HeaderProps {
  title?: string;
  leftIcon?: string;
  rightIcon?: string;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  style?: ViewStyle;
  backgroundColor?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  leftIcon,
  rightIcon,
  onLeftPress,
  onRightPress,
  style,
  backgroundColor = colors.white,
  showBackButton = false,
  onBackPress,
}) => {
  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    }
  };

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={backgroundColor}
        translucent={false}
      />
      <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
        <View style={[styles.container, style]}>
          {/* Left side */}
          <View style={styles.leftSection}>
            {showBackButton && (
              <Button
                variant="ghost"
                onPress={handleBackPress}
                style={styles.iconButton}
              >
                <Icon name="arrow-back" size={24} color={colors.gray[700]} />
              </Button>
            )}
            {leftIcon && onLeftPress && (
              <Button
                variant="ghost"
                onPress={onLeftPress}
                style={styles.iconButton}
              >
                <Icon name={leftIcon} size={24} color={colors.gray[700]} />
              </Button>
            )}
          </View>

          {/* Center - Title */}
          {title && (
            <View style={styles.centerSection}>
              <Text
                variant="h4"
                color="gray.900"
                align="center"
                numberOfLines={1}
              >
                {title}
              </Text>
            </View>
          )}

          {/* Right side */}
          <View style={styles.rightSection}>
            {rightIcon && onRightPress && (
              <Button
                variant="ghost"
                onPress={onRightPress}
                style={styles.iconButton}
              >
                <Icon name={rightIcon} size={24} color={colors.gray[700]} />
              </Button>
            )}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    ...shadows.sm,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    minHeight: 56,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  centerSection: {
    flex: 2,
    alignItems: 'center',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    padding: 0,
    margin: 0,
  },
});

export default Header;
