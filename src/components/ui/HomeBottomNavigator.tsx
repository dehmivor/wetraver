import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Text from './Text';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface HomeBottomNavigatorProps {
  activeTab?: string;
  onTabPress?: (tab: string) => void;
}

const HomeBottomNavigator: React.FC<HomeBottomNavigatorProps> = ({
  activeTab = '홈',
  onTabPress,
}) => {
  const navItems = [
    { key: '홈', icon: 'home', label: '홈' },
    { key: '커뮤니티', icon: 'people', label: '커뮤니티' },
    { key: '버디픽', icon: 'star', label: '버디픽' },
    { key: '채팅', icon: 'send', label: '채팅' },
    { key: '프로필', icon: 'profile', label: 'qwert', isProfile: true },
  ];

  return (
    <View style={styles.bottomNav}>
      {navItems.map(item => (
        <TouchableOpacity
          key={item.key}
          style={styles.navItem}
          onPress={() => onTabPress?.(item.key)}
        >
          {item.isProfile ? (
            <Image
              source={require('../../assets/images/leandro-navarro.jpg')}
              style={styles.profileNavAvatar}
            />
          ) : (
            <Icon
              name={item.icon}
              size={24}
              color={activeTab === item.key ? '#000' : '#9CA3AF'}
            />
          )}
          <Text
            style={[
              styles.navText,
              activeTab === item.key && styles.activeNavText,
            ]}
          >
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItem: {
    alignItems: 'center',
    flex: 1,
  },
  navText: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 4,
  },
  activeNavText: {
    color: '#000',
  },
  profileNavAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
});

export default HomeBottomNavigator;
