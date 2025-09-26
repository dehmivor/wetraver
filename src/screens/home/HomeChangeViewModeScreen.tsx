import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

type HomeChangeViewModeScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const HomeChangeViewModeScreen: React.FC = () => {
  const navigation = useNavigation<HomeChangeViewModeScreenNavigationProp>();
  const [selectedMode, _setSelectedMode] = useState('grid');
  const [activeTab, setActiveTab] = useState('추천'); // default first tab

  const handleSearchPress = () => {
    console.log('Search pressed');
  };

  const handleNotificationPress = () => {
    console.log('Notification pressed');
  };

  const handleImagePress = (modeId: string) => {
    navigation.navigate('HomeCardTap', { modeId });
  };

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

  const handleBackToHome = () => {
    navigation.navigate('HomeRecommendation');
  };

  const viewModes = [
    {
      id: 'grid',
      title: '그리드 뷰',
      subtitle: '2열 카드 형태',
      username: 'wetraver.kk',
      image: require('../../assets/images/tokyo-traveler.jpg'),
    },
    {
      id: 'list',
      title: '리스트 뷰',
      subtitle: '목록 형태',
      username: 'adventure.seeker',
      image: require('../../assets/images/harrison-chang.jpg'),
    },
    {
      id: 'large',
      title: '큰 카드 뷰',
      subtitle: '대형 카드',
      username: 'seoul.walker',
      image: require('../../assets/images/joe-pohle.jpg'),
    },
    {
      id: 'compact',
      title: '컴팩트 뷰',
      subtitle: '간소화된 형태',
      username: 'busan.lover',
      image: require('../../assets/images/letteris.jpg'),
    },
    {
      id: 'mosaic',
      title: '모자이크 뷰',
      subtitle: '조각 모음 형태',
      username: 'mosaic.creator',
      image: require('../../assets/images/alison-pang.jpg'),
    },
    {
      id: 'gallery',
      title: '갤러리 뷰',
      subtitle: '전시 형태',
      username: 'gallery.curator',
      image: require('../../assets/images/anthony-tran.jpg'),
    },
  ];

  const tabs = ['추천', '인기셀러', '크리에이터'];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Status Bar */}
      <View style={styles.statusBar} />

      {/* Header with Tabs */}
      <View style={styles.header}>
        <View style={styles.tabContainer}>
          {tabs.map(tab => (
            <TouchableOpacity
              key={tab}
              style={styles.tab}
              onPress={() => handleTabPress(tab)}
            >
              <Text
                style={
                  activeTab === tab
                    ? [styles.tabText, styles.activeTabText]
                    : styles.tabText
                }
              >
                {tab}
              </Text>
              {activeTab === tab && <View style={styles.tabIndicator} />}
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity
            onPress={handleSearchPress}
            style={styles.iconButton}
          >
            <Icon name="search" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleNotificationPress}
            style={styles.iconButton}
          >
            <Icon name="notifications" size={24} color="#000" />
            <View style={styles.notificationDot} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          {/* 3x2 Grid of View Mode Options (6 cards) */}
          <View style={styles.viewModesGrid}>
            {viewModes.map(mode => (
              <TouchableOpacity
                key={mode.id}
                style={[
                  styles.viewModeCard,
                  selectedMode === mode.id && styles.selectedViewModeCard,
                ]}
                onPress={() => handleImagePress(mode.id)}
              >
                <Image source={mode.image} style={styles.viewModeImage} />
                <View style={styles.viewModeOverlay}>
                  <View style={styles.viewModeTextContainer}>
                    <Text style={styles.viewModeTitle}>{mode.title}</Text>
                    <Text style={styles.viewModeSubtitle}>{mode.subtitle}</Text>
                  </View>
                  <View style={styles.viewModeBottomRow}>
                    <View style={styles.viewModeAvatar}>
                      <Image
                        source={require('../../assets/images/guiherme-stecanella.jpg')}
                        style={styles.avatarImage}
                      />
                    </View>
                    <Text style={styles.viewModeUsername}>{mode.username}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={24} color="#000" />
          <Text style={[styles.navText, styles.activeNavText]}>홈</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="people" size={24} color="#9CA3AF" />
          <Text style={styles.navText}>커뮤니티</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="star" size={24} color="#9CA3AF" />
          <Text style={styles.navText}>버디픽</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="send" size={24} color="#9CA3AF" />
          <Text style={styles.navText}>채팅</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require('../../assets/images/leandro-navarro.jpg')}
            style={styles.profileNavAvatar}
          />
          <Text style={styles.navText}>qwert</Text>
        </TouchableOpacity>
      </View>

      {/* Floating Action Buttons */}
      <View style={styles.fabContainer}>
        <TouchableOpacity
          style={styles.fabSecondary}
          onPress={handleBackToHome}
        >
          <Icon name="grid-on" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.fabShadow}>
          <LinearGradient
            colors={['#AB42FF', '#7862FF', '#3687FF']}
            locations={[0, 0.5, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.fabPrimary}
          >
            <Icon name="add" size={24} color="#fff" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
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
  content: { flex: 1, backgroundColor: '#fff' },
  contentContainer: { padding: 20 },
  // 3x2 Grid for View Mode Options (6 cards)
  viewModesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10.5, // To center the cards with left: 185.5px positioning
  },
  viewModeCard: {
    width: 175,
    height: 280,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#000',
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedViewModeCard: { borderColor: '#9C27B0' },
  viewModeImage: { 
    width: '100%', 
    height: '100%', 
    resizeMode: 'cover' 
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
  viewModeTextContainer: {
    marginTop: 'auto',
    marginBottom: 16,
  },
  viewModeTitle: {
    fontFamily: 'Pretendard',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.32, // -2% of 16px
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
    letterSpacing: -0.32, // -2% of 16px
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
    letterSpacing: -0.28, // -2% of 14px
    color: '#fff',
    textShadowColor: 'rgba(0,0,0,0.8)',
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
  navItem: { alignItems: 'center', flex: 1 },
  navText: { fontSize: 12, color: '#9CA3AF', marginTop: 4 },
  activeNavText: { color: '#000' },
  profileNavAvatar: { width: 24, height: 24, borderRadius: 12 },
  fabContainer: {
    position: 'absolute',
    right: 20,
    bottom: 100,
    alignItems: 'center',
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
  fabShadow: {
    elevation: 6,
    shadowColor: '#402E99',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    borderRadius: 28,
  },
});

export default HomeChangeViewModeScreen;
