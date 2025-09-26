import React, { useRef } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  PanResponder,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { HomeBottomNavigator } from '../../components/ui';

const SWIPE_THRESHOLD = 100; // Minimum vertical swipe distance

const HomeCardTapScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<any>();
const { card } = route.params || {};


  // Ref to track vertical movement
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (_, gestureState) => {
        // Activate responder only if vertical swipe qualifies
        const { dx, dy } = gestureState;
        return Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 5;
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy < -SWIPE_THRESHOLD) {
          // Detected swipe up
          navigation.navigate('HomeDetailPage' as never);
        }
      },
    }),
  ).current;

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSearchPress = () => {
    console.log('Search pressed');
  };

  const handleNotificationPress = () => {
    console.log('Notification pressed');
  };

  return (
    <View style={styles.container}>
<StatusBar
  barStyle="light-content"
  translucent
  backgroundColor="transparent"
/>
      {/* Header with Back Button and Icons */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerIcons}>
          <TouchableOpacity
            onPress={handleSearchPress}
            style={styles.iconButton}
          >
            <Icon name="search" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleNotificationPress}
            style={styles.iconButton}
          >
            <Icon name="notifications" size={20} color="#000" />
            <View style={styles.notificationDot} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content with Background Image and Swipe Gesture */}
      <View style={styles.content} {...panResponder.panHandlers}>
        <Image
          source={require('../../assets/images/tokyo-traveler.jpg')}
          style={styles.backgroundImage}
        />

        <View style={styles.textOverlay}>
          <Text style={styles.titleText}>TOKYO</Text>
          <Text style={styles.subtitleText}>Traveler</Text>
        </View>

        {/* Scroll Indicator */}
        <TouchableOpacity
          style={styles.scrollIndicator}
          onPress={() => navigation.navigate('HomeDetailPage' as never)}
        >
          <Text style={styles.scrollText}>아래로 스크롤 해주세요.</Text>
          <Icon name="keyboard-arrow-down" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <HomeBottomNavigator activeTab="홈" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 25,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(156, 163, 175, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    position: 'relative',
  },
  notificationDot: {
    position: 'absolute',
    top: 5,
    right: 5,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF0000',
  },
  content: {
    flex: 1,
    position: 'relative',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textOverlay: {
    position: 'absolute',
    top: '40%',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  titleText: {
    fontFamily: 'Pretendard-Thin',
    fontSize: 54,
    fontWeight: '100',
    color: '#fff',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    letterSpacing: 12,
  },
  subtitleText: {
    fontFamily: 'Pretendard-ExtraLight',
    fontSize: 32,
    fontWeight: '200',
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    letterSpacing: 15,
  },
  scrollIndicator: {
    position: 'absolute',
    bottom: 120,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  scrollText: {
    fontFamily: 'Pretendard-Regular',
    fontSize: 12,
    fontWeight: '400',
    color: '#fff',
    marginBottom: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    lineHeight: 16,
    letterSpacing: 0,
    width: 113,
    textAlign: 'center',
  },
});

export default HomeCardTapScreen;
