
import Divider from '../../components/ui/Divider';
import { useNavigation } from '@react-navigation/native';
import {  useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

const HomeDetailPageScreen: React.FC = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<any>>(null);

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const handleDotPress = (index: number) => {
    flatListRef.current?.scrollToIndex({ index, animated: true });
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSearchPress = () => {
    console.log('Search pressed');
  };

  const handleNotificationPress = () => {
    console.log('Notification pressed');
  };

  const handleCommentPress = () => {
    navigation.navigate('HomeComments' as never);
  };

  const handleFollowPress = () => {
    console.log('Follow pressed');
  };

  const handleSharePress = () => {
    console.log('Share pressed');
  };

  const images = [
    require('../../assets/images/ruitong-xie.jpg'),
    require('../../assets/images/antonio-dafei.jpg'),
    require('../../assets/images/daniel-smit.jpg'),
    require('../../assets/images/joe-pohle.jpg'),
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.timeText}>23:18</Text>
        <View style={styles.statusIcons}>
          <Icon name="signal-cellular-4-bar" size={16} color="#fff" />
          <Icon name="wifi" size={16} color="#fff" style={styles.statusIcon} />
          <Icon
            name="battery-full"
            size={16}
            color="#fff"
            style={styles.statusIcon}
          />
        </View>
      </View>

      {/* Header with Back Button and Icons */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
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

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* User Profile Section */}
        <View style={styles.userSection}>
          <View style={styles.userInfo}>
            <View style={styles.profileContainer}>
              <Image
                source={require('../../assets/images/guiherme-stecanella.jpg')}
                style={styles.profileImage}
              />
              <View style={styles.verifiedBadge}>
                <Icon name="star" size={12} color="#FFD700" />
              </View>
            </View>
            <View style={styles.userDetails}>
              <Text style={styles.username}>wetraver.kk</Text>
              <Text style={styles.postTitle}>일본 도쿄 여행, 숨은 이야기</Text>
              <View style={styles.locationDateBar}>
                <Icon name="place" size={16} color="#9C27B0" />
                <Text style={styles.locationText}>도쿄, 일본</Text>
                <View style={styles.separator} />
                <Text style={styles.dateText}>
                  25.8.18 (월) - 26.8.21 (목) · 4일
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.followButton}
            onPress={handleFollowPress}
          >
            <Text style={styles.followButtonText}>팔로우</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.imageCarouselContainer}>
          <FlatList
            ref={flatListRef}
            data={images}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            renderItem={({ item }) => (
              <Image
                source={item}
                style={styles.carouselImage}
              />
            )}
          />
        </View>

        {/* Pagination Dots */}
        <View style={styles.paginationContainer}>
          {images.map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleDotPress(index)}
              style={[
                styles.paginationDot,
                currentIndex === index && styles.activeDot
              ]}
            />
          ))}
        </View>

        {/* Description Text */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            스카이트리부터 시부야까지, 저와 함께 도쿄 속 숨은 이야기와 빛나는
            순간을 여행해요. 골목길의 작은 카페부터 화려한 네온 사인까지, 도쿄가
            들려주는 특별한 하루를 함께 걸어가요.
          </Text>
          <Text style={styles.descriptionText}>
            낮에는 전통이 살아 숨 쉬는 아사쿠사와 우에노 거리를 거닐며 옛 정취를
            느끼고, 밤에는 시부야의 끝없는 에너지와 신주쿠의 빛나는 야경 속으로
            들어갑니다.
          </Text>
          <Text style={styles.timestamp}>9시간 전</Text>
        </View>

        <View style={styles.imageCarouselContainer}>
         <FlatList
  ref={flatListRef}
  data={images}
  keyExtractor={(_, index) => index.toString()}
  horizontal
  pagingEnabled
  showsHorizontalScrollIndicator={false}
  onScroll={handleScroll}
  renderItem={({ item }) => (
    <Image source={item} style={styles.carouselImage} />
  )}
  initialScrollIndex={2}   // 👈 start at the 2nd item
  getItemLayout={(_, index) => ({
    length: width,         // width of each item
    offset: width * index, // distance from start
    index,
  })}
/>

        </View>

        {/* Pagination Dots */}
        <View style={styles.paginationContainer}>
          {images.map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleDotPress(index)}
              style={[
                styles.paginationDot,
                currentIndex === index && styles.activeDot
              ]}
            />
          ))}
        </View>

        {/* Description Text */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            익숙하면서도 늘 새로운 도시, 도쿄가 보여주는 다채로운 풍경을 저와 함께 한 발짝씩 따라가 보지 않으시겠어요?현대와 전통이 공존하는 거리, 계절마다 변하는 공원의 색채, 그리고 사람들의 활기찬 일상이 어우러진 도쿄는 언제나 새로운 이야기를 들려줍니다.
          </Text>
          <Text style={styles.timestamp}>9시간 전</Text>
        </View>


     {/* Map Section */}
<View style={styles.mapContainer}>
  <Image
    source={require('../../assets/images/map.png')}
    style={styles.mapImage}
  />

  {/* Centered icon + text */}
  <View style={styles.mapPlaceholder}>
    <Icon name="map" size={40} color="#fff" />
    <Text style={styles.mapText}>지도 보기</Text>
  </View>

  {/* Expand button in the corner */}
  <TouchableOpacity style={styles.mapExpandButton}>
    <Icon name="open-in-full" size={20} color="#000" />
  </TouchableOpacity>
</View>
<Text style={styles.locationDetail}>일본, 도쿄, 381-12</Text>

        <Divider style={{ flex: 1, height: 1,  marginHorizontal: 20}} />

        {/* Hashtags */}
        <View style={styles.hashtagsContainer}>
          <Text style={styles.hashtag}>
            <Text style={{ color: '#2563EB' }}>#</Text>일본여행
          </Text>
          <Text style={styles.hashtag}>
            <Text style={{ color: '#2563EB' }}>#</Text>도쿄여행
          </Text>
          <Text style={styles.hashtag}>
            <Text style={{ color: '#2563EB' }}>#</Text>로컬체험
          </Text>
          <Text style={styles.hashtag}>
            <Text style={{ color: '#2563EB' }}>#</Text>핫플
          </Text>
          <Text style={styles.hashtag}>
            <Text style={{ color: '#2563EB' }}>#</Text>숨은명소
          </Text>
        </View>

        {/* Engagement Metrics */}
        <View style={styles.engagementContainer}>
          <View style={styles.engagementItem}>
            <Icon name="favorite" size={20} color="#FF6B6B" />
            <Text style={styles.engagementText}>1.3만</Text>
          </View>
          <TouchableOpacity
            style={styles.engagementItem}
            onPress={handleCommentPress}
          >
            <Icon name="chat-bubble-outline" size={20} color="#9CA3AF" />
            <Text style={styles.engagementText}>97</Text>
          </TouchableOpacity>
          <View style={styles.engagementItem}>
            <Icon name="bookmark-border" size={20} color="#9CA3AF" />
            <Text style={styles.engagementText}>76</Text>
          </View>
        </View>

        {/* Price and Action Section */}
        <View style={styles.priceSection}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>₩ 239,900</Text>
            <TouchableOpacity style={styles.matchingButton}>
              <Text style={styles.matchingButtonText}>매칭 가능상품</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.shareButton}
            onPress={handleSharePress}
          >
            <Icon name="send" size={20} color="#fff" />
          </TouchableOpacity>
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
          <Icon name="star-border" size={24} color="#9CA3AF" />
          <Text style={styles.navText}>버디픽</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="send" size={24} color="#9CA3AF" />
          <Text style={styles.navText}>채팅</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require('../../assets/images/harrison-chang.jpg')}
            style={styles.profileNavAvatar}
          />
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
    backgroundColor: '#fff',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
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
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    position: 'relative',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
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
    backgroundColor: '#fff',
  },
  userSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  userInfo: {
    flexDirection: 'row',
    flex: 1,
  },
  profileContainer: {
    position: 'relative',
    marginRight: 12,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  verifiedBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userDetails: {
    flex: 1,
  },
  username: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  locationDateBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  locationText: {
    fontSize: 14,
    color: '#000',
    marginLeft: 4,
  },
  separator: {
    width: 1,
    height: 16,
    backgroundColor: '#D1D5DB',
    marginHorizontal: 8,
  },
  dateText: {
    fontSize: 14,
    color: '#000',
  },
  followButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  followButtonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
  },
  imageCarouselContainer: {
    marginTop: 0,
  },
  carouselImage: {
    width: width,
    height: 300,
    resizeMode: 'cover',
  },
  avatarOverlay: {
    position: 'absolute',
    bottom: 15,
    left: 15,
  },
  overlayAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#fff',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D1D5DB',
    marginHorizontal: 4,
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#374151',
  },
  descriptionContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  descriptionText: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
    marginBottom: 12,
  },
  timestamp: {
    fontSize: 14,
    color: '#9CA3AF',
    marginTop: 8,
  },
  mapContainer: {
  position: 'relative',   // allow overlay
  marginHorizontal: 20,
  marginVertical: 15,
  height: 180,
  borderRadius: 12,
  overflow: 'hidden',     // make image corners rounded
},
mapImage: {
  width: '100%',
  height: '100%',
  resizeMode: 'cover',
  position: 'absolute',   // make it background
},
mapPlaceholder: {
  position: 'absolute',
  top: '40%',
  left: 0,
  right: 0,
  alignItems: 'center',
  zIndex: 2,              // ensure it's above
},
mapExpandButton: {
  position: 'absolute',
  top: 10,
  right: 10,
  width: 36,
  height: 36,
  borderRadius: 18,
  backgroundColor: 'rgba(255,255,255,0.9)',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 3,              // above placeholder & image
},
mapText: {
  fontSize: 14,
  color: '#fff',
  marginTop: 8,
  fontWeight: '600',
},
  locationDetail: {
    fontSize: 14,
    color: '#6B7280',
    marginHorizontal: 20,
    marginBottom: 15,
  },
  hashtagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  hashtag: {
    backgroundColor: '#fff',
    color: '#000',
    paddingVertical: 6,
    borderRadius: 15,
    fontSize: 12,
    fontWeight: '500',
    marginRight: 8,
    marginBottom: 8,
  },
  engagementContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  engagementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  engagementText: {
    fontSize: 14,
    color: '#374151',
    marginLeft: 4,
    fontWeight: '600',
  },
  priceSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 15,
  },
  matchingButton: {
    backgroundColor: '#E0E7FF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  matchingButtonText: {
    color: '#9C27B0',
    fontSize: 14,
    fontWeight: '600',
  },
  shareButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#9C27B0',
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default HomeDetailPageScreen;
