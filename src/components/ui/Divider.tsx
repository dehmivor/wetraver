import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { colors, spacing } from '../../constants/theme';

interface DividerProps {
  color?: string;
  thickness?: number;
  margin?: number;
  style?: ViewStyle;
}

const Divider: React.FC<DividerProps> = ({
  color = colors.gray[200],
  thickness = 1,
  margin = spacing.md,
  style,
}) => {
  return (
    <View
      style={[
        styles.divider,
        {
          backgroundColor: color,
          height: thickness,
          marginVertical: margin,
        },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  divider: {
    width: '100%',
  },
});

export default Divider;
