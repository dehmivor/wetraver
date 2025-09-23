import React, { useState } from 'react';
import { 
  View, 
  StyleSheet, 
  ScrollView, 
  Text, 
  TouchableOpacity, 
  Image,
  StatusBar,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const HomePopularSellerScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState('인기셀러');

  const handleSearchPress = () => {
    console.log('Search pressed');
  };

  const handleNotificationPress = () => {
    console.log('Notification pressed');
  };

  const handleFollowPress = () => {
    console.log('Follow pressed');
  };

  const tabs = ['추천', '인기셀러', '크리에이터'];

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

      {/* Header with Tabs */}
      <View style={styles.header}>
        <View style={styles.tabContainer}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={styles.tab}
              onPress={() => setActiveTab(tab)}
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
          <TouchableOpacity onPress={handleSearchPress} style={styles.iconButton}>
            <Icon name="search" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNotificationPress} style={styles.iconButton}>
            <Icon name="notifications" size={24} color="#fff" />
            <View style={styles.notificationDot} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Call to Action Text */}
        <View style={styles.callToActionContainer}>
          <Text style={styles.callToActionText}>다양한 여행 친구를 팔로우하고</Text>
          <Text style={styles.callToActionText}>인기 콘텐츠를 즐겨보세요</Text>
        </View>

        {/* Profile Cards Section */}
        <View style={styles.profileCardsContainer}>
          {/* Left Side Profile Card */}
          <View style={styles.sideProfileCard}>
            <Image 
              source={require('../../assets/images/anthony-tran.jpg')} 
              style={styles.sideProfileImage} 
            />
          </View>

          {/* Central Profile Card */}
          <View style={styles.centralProfileCard}>
            <Image 
              source={require('../../assets/images/daniel-j.jpg')} 
              style={styles.centralProfileImage} 
            />
            <View style={styles.profileOverlay}>
              <Text style={styles.profileTitle}>일본탐방 로컬도쿄</Text>
              <Text style={styles.profileUsername}>wewemomo</Text>
            </View>
          </View>

          {/* Right Side Profile Card */}
          <View style={styles.sideProfileCard}>
            <Image 
              source={require('../../assets/images/leandro-navarro.jpg')} 
              style={styles.sideProfileImage} 
            />
          </View>
        </View>

        {/* Hashtags Section */}
        <View style={styles.hashtagsContainer}>
          <View style={styles.hashtagRow}>
            <Text style={styles.hashtag}>#일본여행</Text>
            <Text style={styles.hashtag}>#도쿄여행</Text>
            <Text style={styles.hashtag}>#로컬체험</Text>
          </View>
          <View style={styles.hashtagRow}>
            <Text style={styles.hashtag}>#핫플</Text>
            <Text style={styles.hashtag}>#숨은명소</Text>
          </View>
        </View>

        {/* Follow Button */}
        <TouchableOpacity style={styles.followButton} onPress={handleFollowPress}>
          <Text style={styles.followButtonText}>팔로우</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={24} color="#9CA3AF" />
          <Text style={styles.navText}>홈</Text>
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

      {/* Floating Action Button */}
      <View style={styles.fabContainer}>
        <TouchableOpacity style={styles.fabPrimary}>
          <Icon name="add" size={24} color="#fff" />
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
    backgroundColor: '#000',
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
    color: '#fff',
  },
  tabIndicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#9C27B0',
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
  content: {
    flex: 1,
    backgroundColor: '#fff',
  },
  callToActionContainer: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  callToActionText: {
    fontSize: 16,
    color: '#374151',
    textAlign: 'center',
    lineHeight: 24,
  },
  profileCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  sideProfileCard: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  sideProfileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  centralProfileCard: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
    marginHorizontal: 20,
    position: 'relative',
  },
  centralProfileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  profileOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  profileTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  profileUsername: {
    color: '#fff',
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  },
  hashtagsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },
  hashtagRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  hashtag: {
    backgroundColor: '#9C27B0',
    color: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    fontSize: 12,
    fontWeight: '500',
    marginHorizontal: 5,
  },
  followButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 25,
    paddingHorizontal: 40,
    paddingVertical: 12,
    alignSelf: 'center',
    marginVertical: 20,
  },
  followButtonText: {
    color: '#374151',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
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
  },
  navText: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 4,
  },
  profileNavAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
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
    backgroundColor: '#9C27B0',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
});

export default HomePopularSellerScreen;
