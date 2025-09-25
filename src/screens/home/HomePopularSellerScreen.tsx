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
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const HomePopularSellerScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState('인기셀러');
  const navigation = useNavigation();


  const handleSearchPress = () => {
    console.log('Search pressed');
  };


  const handleNotificationPress = () => {
    console.log('Notification pressed');
  };


  const handleFollowPress = () => {
    console.log('Follow pressed');
  };


  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
    if (tab === '추천') {
      navigation.navigate('HomeRecommendation' as never);
    } else if (tab === '크리에이터') {
      navigation.navigate('HomeCreator' as never);
    }
  };


  const tabs = ['추천', '인기셀러', '크리에이터'];


  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {/* Status Bar */}
      <View style={styles.statusBar}>
      </View>


      {/* Header with Tabs */}
  <View style={styles.header}>
        <View style={styles.tabContainer}>
          {tabs.map((tab) => (
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
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Call to Action Text */}
        <View style={styles.callToActionContainer}>
          <Text style={styles.callToActionText}>다양한 여행 친구를 팔로우하고</Text>
          <Text style={styles.callToActionText}>인기 콘텐츠를 즐겨보세요</Text>
        </View>


        {/* Profile Cards Section */}
        <View style={styles.profileCardsContainer}>
          {/* Left Side Profile Card */}
          <View style={styles.sideLeftProfileCard}>
            <Image 
              source={require('../../assets/images/daniel-j.jpg')} 
              style={styles.sideProfileImage} 
            />
          </View>


          {/* Central Profile Card */}
			<View style={styles.centralProfileCard}>
            <Image 
              source={require('../../assets/images/anthony-tran.jpg')} 
              style={styles.centralProfileImage} 
            />
				<LinearGradient
					colors={['transparent', 'rgba(153, 107, 61, 0.7)']}
					start={{ x: 0.5, y: 0 }}
					end={{ x: 0.5, y: 1 }}
					style={styles.profileGradient}
				/>
            <View style={styles.profileOverlay}>
              <Text style={styles.profileTitle}>일본탐방 로컬도쿄</Text>
              <Text style={styles.profileUsername}>wewemomo</Text>
            </View>
          </View>


          {/* Right Side Profile Card */}
          <View style={styles.sideRightProfileCard}>
            <Image 
              source={require('../../assets/images/guiherme-stecanella.jpg')} 
              style={styles.sideProfileImage} 
            />
          </View>
        </View>


        {/* Hashtags Section */}
        <View style={styles.hashtagsContainer}>
          <View style={styles.hashtagRow}>
            <Text style={{fontSize: 20}}>  <Text style={{ color: '#584DFF', fontSize: 20, fontWeight: '500' }}>#</Text>일본여행</Text>
            <Text  style={{fontSize: 20}}> <Text style={{ color: '#584DFF', fontSize: 20, fontWeight: '500' }}>#</Text>도쿄여행</Text>
            <Text style={{fontSize: 20}}> <Text style={{ color: '#584DFF', fontSize: 20, fontWeight: '500' }}>#</Text>로컬체험</Text>
          </View>
          <View style={styles.hashtagRow}>
            <Text style={{fontSize: 20}}> <Text style={{ color: '#584DFF', fontSize: 20, fontWeight: '500' }}>#</Text>핫플</Text>
            <Text  style={{fontSize: 20}}> <Text style={{ color: '#584DFF', fontSize: 20, fontWeight: '500' }}>#</Text>숨은명소</Text>
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
			<TouchableOpacity activeOpacity={0.8} style={styles.fabShadow}>
				<LinearGradient
					colors={["#AB42FF", "#7862FF", "#3687FF"]}
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
 header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
  headerLeft: {
    width: 80, // Space for left side (same width as headerIcons)
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
  content: {
    flex: 1,
    backgroundColor: '#fff',
  },
  callToActionContainer: {
    alignItems: 'center',
    marginTop:60
  },
  callToActionText: {
    fontSize: 24,
    color: '#374151',
    textAlign: 'center',
    lineHeight: 24,
marginBottom: 10,
  },
  profileCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  sideLeftProfileCard: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
    marginHorizontal: 5,
    marginTop: 150,
    position: 'relative',
  },
   sideRightProfileCard: {
   width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
    marginHorizontal: 5,
    marginTop: -150,
    position: 'relative',
  },
  sideProfileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  centralProfileCard: {
    width: 250,
    height: 250,
    borderRadius: 125,
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
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
	profileGradient: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
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
paddingHorizontal: 40,
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
    right: 15,
    bottom: 80,
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
});


export default HomePopularSellerScreen;