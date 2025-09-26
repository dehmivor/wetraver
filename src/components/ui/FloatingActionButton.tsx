import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

interface FloatingActionButtonProps {
  onPrimaryPress?: () => void;
  onSecondaryPress?: () => void;
  showSecondary?: boolean;
  secondaryIcon?: string;
  primaryIcon?: string;
  bottom?: number;
  right?: number;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  onPrimaryPress,
  onSecondaryPress,
  showSecondary = false,
  secondaryIcon = 'grid-on',
  primaryIcon = 'add',
  bottom = 100,
  right = 20,
}) => {
  const fabContainerStyle = {
    ...styles.fabContainer,
    bottom,
    right,
  };

  return (
    <View style={fabContainerStyle}>
      {showSecondary && (
        <TouchableOpacity style={styles.fabSecondary} onPress={onSecondaryPress}>
          <Icon name={secondaryIcon} size={24} color="#666" />
        </TouchableOpacity>
      )}
      <TouchableOpacity activeOpacity={0.8} style={styles.fabShadow}>
        <LinearGradient
          colors={['#AB42FF', '#7862FF', '#3687FF']}
          locations={[0, 0.5, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.fabPrimary}
        >
          <Icon name={primaryIcon} size={24} color="#fff" />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  fabContainer: {
    position: 'absolute',
    alignItems: 'center',
  },
  fabShadow: {
    elevation: 6,
    shadowColor: '#402E99',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    borderRadius: 28,
  },
  fabPrimary: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabSecondary: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default FloatingActionButton;
