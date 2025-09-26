import React, { useState, useRef, useEffect } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { HomeBottomNavigator, FloatingActionButton } from '../../components/ui';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

type HomeChangeViewModeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const HomeChangeViewModeScreen: React.FC = () => {
  const navigation = useNavigation<HomeChangeViewModeScreenNavigationProp>();
  const [activeTab, setActiveTab] = useState('추천');
  const [isGridMode, setIsGridMode] = useState(true);

  // Animated value to control fade between views
  const fadeAnim = useRef(new Animated.Value(1)).current;

  // Posts data used for single card view
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

  // View modes data used for grid view (6 cards)
  const viewModes = [
    {
      id: 'grid',
      title: '그리드 뷰',
      subtitle: '2열 카드 형태',
      username: 'wetraver.kk',
      image: require('../../assets/images/tokyo-traveler.jpg'),
      avatar: require('../../assets/images/guiherme-stecanella.jpg'),
      bookmarks: 120,
      isBookmarked: true,
    },
    {
      id: 'list',
      title: '리스트 뷰',
      subtitle: '목록 형태',
      username: 'adventure.seeker',
      image: require('../../assets/images/harrison-chang.jpg'),
      avatar: require('../../assets/images/anthony-tran.jpg'),
      bookmarks: 80,
      isBookmarked: false,
    },
    {
      id: 'large',
      title: '큰 카드 뷰',
      subtitle: '대형 카드',
      username: 'seoul.walker',
      image: require('../../assets/images/joe-pohle.jpg'),
      avatar: require('../../assets/images/daniel-j.jpg'),
      bookmarks: 200,
      isBookmarked: true,
    },
    {
      id: 'compact',
      title: '컴팩트 뷰',
      subtitle: '간소화된 형태',
      username: 'busan.lover',
      image: require('../../assets/images/letteris.jpg'),
      avatar: require('../../assets/images/osaka-master.jpg'),
      bookmarks: 65,
      isBookmarked: false,
    },
    {
      id: 'mosaic',
      title: '모자이크 뷰',
      subtitle: '조각 모음 형태',
      username: 'mosaic.creator',
      image: require('../../assets/images/joe-jasmin.jpg'),
      avatar: require('../../assets/images/harrison-chang.jpg'),
      bookmarks: 140,
      isBookmarked: true,
    },
    {
      id: 'gallery',
      title: '갤러리 뷰',
      subtitle: '전시 형태',
      username: 'gallery.curator',
      image: require('../../assets/images/ahmet-yuksek.jpg'),
      avatar: require('../../assets/images/tokyo-traveler.jpg'),
      bookmarks: 99,
      isBookmarked: false,
    },
  ];

  const tabs = ['추천', '인기셀러', '크리에이터'];

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
    if (tab === '추천') {
      navigation.navigate('HomeRecommendation');
    } else if (tab === '인기셀러') {
      navigation.navigate('HomePopularSeller');
    } else if (tab === '크리에이터') {
      navigation.navigate('HomeCreator');
    }
  };

  const handleSearchPress = () => {
    console.log('Search pressed');
  };

  const handleNotificationPress = () => {
    console.log('Notification pressed');
  };

  const handleImagePress = (mode: any) => {
    navigation.navigate('HomeCardTap', { card: mode });
  };

  const handleBackToHome = () => {
    navigation.navigate('HomeRecommendation');
  };

  // Support for LayoutAnimation on android
  useEffect(() => {
    if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  const toggleViewMode = () => {
    // Animate fade out
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      // Change view mode state
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setIsGridMode((prev) => !prev);
      // Animate fade in
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Status Bar */}
      <View style={styles.statusBar} />

      {/* Header with Tabs */}
      <View style={styles.header}>
        <View style={styles.tabContainer}>
          {tabs.map((tab) => (
            <TouchableOpacity key={tab} style={styles.tab} onPress={() => handleTabPress(tab)}>
              <Text style={activeTab === tab ? [styles.tabText, styles.activeTabText] : styles.tabText}>
                {tab}
              </Text>
              {activeTab === tab && <View style={styles.tabIndicator} />}
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={handleSearchPress} style={styles.iconButton}>
            <Icon name="search" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNotificationPress} style={styles.iconButton}>
            <Icon name="notifications" size={24} color="#000" />
            <View style={styles.notificationDot} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content */}
      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
        {isGridMode ? (
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
            <View style={styles.viewModesGrid}>
              {viewModes.map((mode) => (
                <TouchableOpacity
                  key={mode.id}
                  style={styles.viewModeCard}
                  onPress={() => handleImagePress(mode)}
                >
                  <Image source={mode.image} style={styles.viewModeImage} />
                  <View style={styles.viewModeOverlay}>
                    <View style={styles.postTopRow}>
                      <View style={styles.userAvatars} />
                      <View style={styles.bookmarkContainer}>
                        <Icon
                          name={mode.isBookmarked ? 'bookmark' : 'bookmark-border'}
                          size={22}
                          color="#fff"
                        />
                      </View>
                    </View>
                    <View style={styles.viewModeTextContainer}>
                      <Text style={styles.viewModeTitle}>{mode.title}</Text>
                      <Text style={styles.viewModeSubtitle}>{mode.subtitle}</Text>
                    </View>
                    <View style={styles.viewModeBottomRow}>
                      <View style={styles.viewModeAvatar}>
                        <Image source={mode.avatar} style={styles.avatarImage} />
                      </View>
                      <Text style={styles.viewModeUsername}>{mode.username}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            {posts.map((post) => (
              <View key={post.id} style={styles.postCard}>
                <Image source={post.image} style={styles.postImage} />

                <View style={styles.postOverlay}>
                  <View style={styles.dimOverlay} />
                  <View style={styles.postTopRow}>
                    <View style={styles.userAvatars} />
                    <View style={styles.bookmarkContainer}>
                      <Icon name="bookmark-border" size={40} color="#fff" />
                      <Text style={styles.bookmarkCount}>{post.bookmarks}</Text>
                    </View>
                  </View>

                  <View style={styles.titleContainer}>
                    <Text style={styles.postTitle}>{post.title}</Text>
                    <Text style={styles.postSubtitle}>{post.subtitle}</Text>
                  </View>

                  <View style={styles.postBottomRow}>
                    <View style={styles.userInfo}>
                      <View style={styles.avatarContainer}>
                        <Image source={post.userAvatar} style={styles.largeAvatar} />
                      </View>
                      <Text style={styles.username}>{post.username}</Text>
                    </View>
                  </View>

                  <Text style={styles.postDescription}>{post.description}</Text>

                  <View style={styles.engagementRow}>
                    <View style={styles.engagementItem}>
                      <Icon name="favorite" size={30} color="#FE0055" />
                      <Text style={styles.engagementText}>{post.likes}</Text>
                    </View>
                    <View style={styles.engagementItem}>
                      <Icon name="message" size={30} color="#fff" />
                      <Text style={styles.engagementText}>{post.comments}</Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        )}
      </Animated.View>

      {/* Bottom Navigation */}
      <HomeBottomNavigator activeTab="홈" />

      {/* Floating Action Buttons */}
      <FloatingActionButton
        showSecondary={true}
        onSecondaryPress={toggleViewMode}
        onPrimaryPress={() => console.log('Primary FAB pressed')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
  tabContainer: { flexDirection: 'row', alignItems: 'center' },
  tab: { marginRight: 30, alignItems: 'center' },
  tabText: { color: '#9CA3AF', fontSize: 16, fontWeight: '500' },
  activeTabText: { color: '#000' },
  tabIndicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#584DFF',
    marginTop: 5,
  },
  headerIcons: { flexDirection: 'row', alignItems: 'center' },
  iconButton: { marginLeft: 15, position: 'relative' },
  notificationDot: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF0000',
  },
  toggleButtonContainer: {
    backgroundColor: '#584DFF',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    flexDirection: 'row',
    gap: 8,
  },
  toggleButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 8,
  },
  content: { flex: 1, backgroundColor: '#fff' },
  contentContainer: { padding: 5 },
  // Grid styles
  viewModesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
    paddingHorizontal: 1,
  },
  viewModeCard: {
    flexBasis: (screenWidth - 30) / 2,
    height: 280,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  viewModeImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  viewModeOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 16,
    justifyContent: 'space-between',
  },
  postTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bookmarkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: 0.5,
    paddingVertical: 2,
  },
  userAvatars: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewModeTextContainer: {
    marginTop: 'auto',
    marginBottom: 16,
  },
  viewModeTitle: {
    fontFamily: 'Pretendard',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.32,
    color: '#fff',
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    marginBottom: 4,
  },
  viewModeSubtitle: {
    fontFamily: 'Pretendard',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.32,
    color: '#fff',
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  viewModeBottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewModeAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#fff',
    overflow: 'hidden',
    marginRight: 8,
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  viewModeUsername: {
    fontFamily: 'Pretendard',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.28,
    color: '#fff',
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  // Single post card styles
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
    lineHeight: 54,
    letterSpacing: 12.8,
    textAlign: 'center',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowRadius: 4,
  },
  postSubtitle: {
    fontFamily: 'Pretendard-ExtraLight',
    fontSize: 32,
    lineHeight: 50,
    letterSpacing: 15,
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
  engagementText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 5,
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default HomeChangeViewModeScreen;
