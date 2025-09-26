import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import Text from '../../components/ui/Text';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { HomeTab, HomeBottomNavigator, FloatingActionButton } from '../../components/ui';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const HomeRecommendationScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState('추천');
  const navigation = useNavigation();

  const handleSearchPress = () => {
    console.log('Search pressed');
  };

  const handleNotificationPress = () => {
    console.log('Notification pressed');
  };

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
    if (tab === '인기셀러') {
      navigation.navigate('HomePopularSeller' as never);
    } else if (tab === '크리에이터') {
      navigation.navigate('HomeCreator' as never);
    }
  };

  const handleViewModePress = () => {
    navigation.navigate('HomeChangeViewMode' as never);
  };

  const tabs = ['추천', '인기셀러', '크리에이터'];

  const posts = [
    {
      id: 1,
      title: 'TOKYO',
      subtitle: 'Traveler',
      description: '일본 도쿄 여행, 숨은 이야기',
      username: 'wetraver.kk',
      likes: '1.3만',
      comments: '97',
      bookmarks: '76',
      image: require('../../assets/images/tokyo-traveler.jpg'),
      verified: true,
      userAvatar: require('../../assets/images/guiherme-stecanella.jpg'),
    },
    {
      id: 2,
      title: 'HARRION',
      subtitle: 'Change',
      description: '새로운 모험을 시작하다',
      username: 'adventure.seeker',
      likes: '892',
      comments: '23',
      bookmarks: '45',
      image: require('../../assets/images/harrison-chang.jpg'),
      verified: false,
      userAvatar: require('../../assets/images/harrison-chang.jpg'),
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Status Bar */}
      <View style={styles.statusBar} />

      {/* Header with Tabs */}
      <HomeTab
        tabs={tabs}
        activeTab={activeTab}
        onTabPress={handleTabPress}
        onSearchPress={handleSearchPress}
        onNotificationPress={handleNotificationPress}
      />

      {/* Main Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {posts.map((post) => (
          <View key={post.id} style={styles.postCard}>
            <Image source={post.image} style={styles.postImage} />

            {/* Post Overlay Content */}
            <View style={styles.postOverlay}>
              {/* Dimmed layer above image, below text */}
              <View style={styles.dimOverlay} />
              {/* Top Row - User Avatars and Bookmark */}
              <View style={styles.postTopRow}>
                <View style={styles.userAvatars} />
                <View style={styles.bookmarkContainer}>
                  <Icon name="bookmark-border" size={40} color="#fff" />
                  <Text style={styles.bookmarkCount}>{post.bookmarks}</Text>
                </View>
              </View>

              {/* Main Title */}
              <View style={styles.titleContainer}>
                <Text style={styles.postTitle}>{post.title}</Text>
                <Text style={styles.postSubtitle}>{post.subtitle}</Text>
              </View>

              {/* Bottom User Info */}
              <View style={styles.postBottomRow}>
                <View style={styles.userInfo}>
                  <View style={styles.avatarContainer}>
                    <Image source={post.userAvatar} style={styles.largeAvatar} />
                  </View>
                  <Text style={styles.username}>{post.username}</Text>
                </View>
              </View>

              {/* Post Description */}
              <Text style={styles.postDescription}>{post.description}</Text>

              {/* Engagement Stats */}
              <View style={styles.engagementRow}>
                <View style={styles.engagementItem}>
                  <Icon name="favorite" size={30} color="#FE0055" />
                  <Text style={styles.engagementText}>{post.likes}</Text>
                </View>
                <View style={styles.engagementItem}>
                  <Icon name="message-circle" size={30} color="#fff" />
                  <Text style={styles.engagementText}>{post.comments}</Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <HomeBottomNavigator activeTab="홈" />

      {/* Floating Action Buttons */}
      <FloatingActionButton
        showSecondary={true}
        onSecondaryPress={handleViewModePress}
        onPrimaryPress={() => console.log('Primary FAB pressed')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    color: '#000',
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
  content: {
    flex: 1,
    backgroundColor: '#fff',
  },
  postCard: {
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#000',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  postImage: {
    width: '100%',
    height: 600,
    resizeMode: 'cover',
    transform: [
      { scale: 1.75 },
      { translateX: screenWidth * 0.15 },
      { translateY: -screenHeight * 0.1 },
    ],
  },
  postOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 16,
    justifyContent: 'space-between',
  },
  dimOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 2,
    pointerEvents: 'none',
  },
  postTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    zIndex: 3,
  },
  userAvatars: {
    position: 'relative',
  },
  smallAvatar: {
    width: 42,
    height: 42,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#fff',
  },
  avatarBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#9C27B0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeIcon: {
    width: 12,
    height: 12,
    tintColor: '#fff',
    resizeMode: 'contain',
  },
  bookmarkContainer: {
    alignItems: 'center',
  },
  bookmarkCount: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
    marginTop: 2,
  },
  titleContainer: {
    alignItems: 'center',
    zIndex: 1,
    marginTop: -30,
  },
  postTitle: {
    fontFamily: 'Pretendard-Thin',
    fontSize: 54,
    lineHeight: 54, // 100%
    letterSpacing: 12.8, // 20% of 54
    textAlign: 'center',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowRadius: 4,
  },
  postSubtitle: {
    fontFamily: 'Pretendard-ExtraLight',
    fontSize: 32,
    lineHeight: 50, // 100%
    letterSpacing: 15, // 42% of 32
    textAlign: 'center',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowRadius: 2,
  },
  postBottomRow: {
    marginBottom: -130,
    zIndex: 3,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#fff',
  },
  largeAvatar: {
    width: 190,
    height: 190,
    position: 'absolute',
    left: -75,
    top: -70,
    resizeMode: 'cover',
  },
  verifiedIcon: {
    marginLeft: 5,
  },
  username: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  postDescription: {
    color: '#fff',
    fontSize: 24,
    marginBottom: -120,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    zIndex: 3,
  },
  engagementRow: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 3,
  },
  engagementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  circleIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  engagementText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default HomeRecommendationScreen;
