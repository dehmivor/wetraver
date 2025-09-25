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


const HomeCreatorScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState('크리에이터');
  const navigation = useNavigation();


  const handleSearchPress = () => {
    console.log('Search pressed');
  };


  const handleNotificationPress = () => {
    console.log('Notification pressed');
  };


  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
    if (tab === '추천') {
      navigation.navigate('HomeRecommendation' as never);
    } else if (tab === '인기셀러') {
      navigation.navigate('HomePopularSeller' as never);
    }
  };


  const tabs = ['추천', '인기셀러', '크리에이터'];


  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
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
        {/* Main Headline */}
        <Text style={styles.mainHeadline}>
         다양한 크리에이터 추천 상품을
        </Text>
        <Text style={styles.mainHeadline}>
         지금 바로 확인해 보세요
        </Text>
        
        {/* Creator Cards */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.cardsContainer}
          contentContainerStyle={styles.cardsContent}
        >
          {/* Left Card */}
          <View style={styles.card}>
            <Image 
              source={require('../../assets/images/antonio-dafei.jpg')} 
              style={styles.cardImage} 
            />
            <View style={styles.cardOverlay}>
              <Text style={styles.cardText}>피와</Text>
              <Text style={styles.cardText}>여행</Text>
            </View>
          </View>
          
          {/* Center Card - Main */}
          <View style={[styles.card, styles.mainCard]}>
            <Image 
              source={require('../../assets/images/clay-banks.jpg')} 
              style={styles.mainCardImage} 
            />
            <View style={styles.mainCardOverlay}>
              <Text style={styles.mainCardTitle}>일본 도쿄 여행, </Text>
              <Text style={styles.mainCardTitle}>숨은 맛집 이야기</Text>
            </View>
            <LinearGradient
                      colors={['transparent', 'rgba(153, 107, 61, 0.7)']}
                      start={{ x: 0.5, y: 0.7 }}
                      end={{ x: 0.5, y: 0.9 }}
                      style={styles.profileGradient}
                    />
<View style={styles.creatorProfile}>
              <Image 
                source={require('../../assets/images/anthony-tran.jpg')} 
                style={styles.creatorAvatar} 
              />
            </View>
          </View>
          
          {/* Right Card */}
          <View style={styles.card}>
            <Image 
              source={require('../../assets/images/alison-pang.jpg')} 
              style={styles.cardImage} 
            />
            <View style={styles.cardOverlay}>
              <Text style={styles.cardText}>맛집</Text>
            </View>
          </View>
        </ScrollView>
        
        {/* Location Section */}
        <View style={styles.locationSection}>
          <Icon name="location-on" size={30} color="#584DFF" />
          <Text style={styles.locationText}>도쿄 ∙ 오사카, 일본</Text>
        </View>
        
        {/* View Products Button */}
        <TouchableOpacity style={styles.viewProductsButton}>
          <Text style={styles.viewProductsText}>상품 보기</Text>
        </TouchableOpacity>
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
               <Image source={require('../../assets/images/leandro-navarro.jpg')} style={styles.profileNavAvatar} />
                 <Text style={styles.navText}>qwert</Text>
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
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tab: {
    marginRight: 30,
    alignItems: 'center',
  },
  tabText: {
    color: '#9CA3AF',
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
    paddingTop: 60,
  },
  mainHeadline: {
    fontSize: 20,
    fontWeight: '300',
    color: '#000',
    textAlign: 'center',
    lineHeight: 28,
  },
  cardsContainer: {
  marginTop: 20,
  marginBottom: 100,  // increased bottom to allow avatar space
},
  cardsContent: {
    paddingHorizontal: 10,
  },
  card: {
    width: 172,
    height: 235,
    marginRight: 15,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
    marginTop: 60,
  },
  mainCard: {
    width: 191,
    height: 260,
    borderRadius: 8,
    overflow: 'visible',
    marginTop: 80,  // increase space for avatar above
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  mainCardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    resizeMode: 'cover',
  },
  cardOverlay: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
  },
  mainCardOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 60, // add top padding to avoid overlap with avatar
    paddingHorizontal: 15,
    paddingBottom: 15,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    zIndex: 3
  },
  cardText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  mainCardTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 10,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },profileGradient: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
    borderRadius: 8,
	},
 creatorProfile: {
  position: 'absolute',
  bottom: -40,       // 40 pixels below card bottom
  left: '50%',
  marginLeft: -40,   // half avatar width to center
  zIndex: 1,
  elevation: 10,     // Android z-index
  borderRadius: 40,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.3,
  shadowRadius: 5,
},
  creatorAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#fff',
  },
  locationSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  locationText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#18191A',
    fontWeight: '400',
  },
  viewProductsButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 60,
    alignSelf: 'center',
    marginBottom: 20,
  },
  viewProductsText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
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
  activeNavText: {
    color: '#000',
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


export default HomeCreatorScreen;
