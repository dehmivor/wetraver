import React, { useRef } from 'react';
import { 
  View, 
  StyleSheet, 
  ScrollView, 
  Text, 
  TouchableOpacity, 
  Image,
  StatusBar,
  Dimensions,
  PanResponder,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useRoute } from '@react-navigation/native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const SWIPE_THRESHOLD = 100; // Minimum vertical swipe distance

const HomeCardTapScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<any>();
  const { modeId } = route.params || {};

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
    })
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
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.timeText}>23:18</Text>
        <View style={styles.statusIcons}>
          <Icon name="signal-cellular-4-bar" size={16} color="#fff" />
          <Icon name="wifi" size={16} color="#fff" style={styles.statusIcon} />
          <Icon name="battery-full" size={16} color="#fff" style={styles.statusIcon} />
        </View>
      </View>

      {/* Header with Back Button and Icons */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>카드 탭</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={handleSearchPress} style={styles.iconButton}>
            <Icon name="search" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNotificationPress} style={styles.iconButton}>
            <Icon name="notifications" size={24} color="#fff" />
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
        
        {/* Text Overlay */}
        <View style={styles.textOverlay}>
          <Text style={styles.titleText}>카드 탭</Text>
          <Text style={styles.subtitleText}>
            {modeId ? `선택된 모드: ${modeId}` : '모드 정보 없음'}
          </Text>
        </View>

        {/* Scroll Indicator */}
        <TouchableOpacity style={styles.scrollIndicator} onPress={() => navigation.navigate('HomeDetailPage' as never)}>
          <Text style={styles.scrollText}>아래로 스크롤 해주세요.</Text>
          <Icon name="keyboard-arrow-down" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={24} color="#000" />
          <Text style={[styles.navText, styles.activeNavText]}>홈</Text>
          <View style={styles.activeIndicator} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="people" size={24} color="#9CA3AF" />
          <Text style={styles.navText}>커뮤니티</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="star-border" size={24} color="#9CA3AF" />
          <Text style={styles.navText}>버디픽</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="send" size={24} color="#9CA3AF" />
          <Text style={styles.navText}>채팅</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../../assets/images/harrison-chang.jpg')} style={styles.profileNavAvatar} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
  timeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIcon: {
    marginLeft: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
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
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
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
    top: '50%',
    left: 0,
    right: 0,
    alignItems: 'center',
    transform: [{ translateY: -50 }],
  },
  titleText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  subtitleText: {
    fontSize: 24,
    fontWeight: '300',
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  scrollIndicator: {
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  scrollText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
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
    position: 'relative',
  },
  navText: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 4,
  },
  activeNavText: {
    color: '#000',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: -10,
    left: '50%',
    marginLeft: -15,
    width: 30,
    height: 2,
    backgroundColor: '#20B2AA',
  },
  profileNavAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
});

export default HomeCardTapScreen;
