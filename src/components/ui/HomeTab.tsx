import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Text from './Text';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface HomeTabProps {
  tabs: string[];
  activeTab: string;
  onTabPress: (tab: string) => void;
  onSearchPress: () => void;
  onNotificationPress: () => void;
}

const HomeTab: React.FC<HomeTabProps> = ({
  tabs,
  activeTab,
  onTabPress,
  onSearchPress,
  onNotificationPress,
}) => {
  return (
    <View style={styles.header}>
      <View style={styles.tabContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity key={tab} style={styles.tab} onPress={() => onTabPress(tab)}>
            <Text
              style={activeTab === tab ? [styles.tabText, styles.activeTabText] : styles.tabText}
            >
              {tab}
            </Text>
            {activeTab === tab && <View style={styles.tabIndicator} />}
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.headerIcons}>
        <TouchableOpacity onPress={onSearchPress} style={styles.iconButton}>
          <Icon name="search" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onNotificationPress} style={styles.iconButton}>
          <Icon name="notifications" size={24} color="#000" />
          <View style={styles.notificationDot} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tab: {
    marginRight: 30,
    alignItems: 'center',
  },
  tabText: {
    color: '#666',
    fontSize: 16,
    fontWeight: '500',
  },
  activeTabText: {
    color: '#000',
  },
  tabIndicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#584DFF',
    marginTop: 5,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 15,
    position: 'relative',
  },
  notificationDot: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF0000',
  },
});

export default HomeTab;
