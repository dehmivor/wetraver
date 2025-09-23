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

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const HomeChangeViewModeScreen: React.FC = () => {
  const navigation = useNavigation();
  const [selectedMode, setSelectedMode] = useState('grid');

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSearchPress = () => {
    console.log('Search pressed');
  };

  const handleNotificationPress = () => {
    console.log('Notification pressed');
  };

  const handleModeSelect = (mode: string) => {
    setSelectedMode(mode);
    console.log('Selected mode:', mode);
  };

  const handleImagePress = (modeId: string) => {
    navigation.navigate('HomeCardTap' as never, { modeId } as never);
  };

  const viewModes = [
    {
      id: 'grid',
      title: '그리드 뷰',
      subtitle: '2열 카드 형태',
      icon: 'grid-on',
      image: require('../../assets/images/tokyo-traveler.jpg'),
      description: '사진을 중심으로 한 카드 형태의 레이아웃'
    },
    {
      id: 'list',
      title: '리스트 뷰',
      subtitle: '목록 형태',
      icon: 'list',
      image: require('../../assets/images/harrison-chang.jpg'),
      description: '간단한 목록 형태의 레이아웃'
    },
    {
      id: 'large',
      title: '큰 카드 뷰',
      subtitle: '대형 카드',
      icon: 'view-module',
      image: require('../../assets/images/guiherme-stecanella.jpg'),
      description: '더 큰 이미지와 상세 정보가 포함된 카드'
    },
    {
      id: 'compact',
      title: '컴팩트 뷰',
      subtitle: '간소화된 형태',
      icon: 'view-compact',
      image: require('../../assets/images/daniel-j.jpg'),
      description: '공간을 효율적으로 사용하는 레이아웃'
    }
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
          <Icon name="battery-full" size={16} color="#fff" style={styles.statusIcon} />
        </View>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>뷰 모드 변경</Text>
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
        <View style={styles.contentContainer}>
          <Text style={styles.sectionTitle}>콘텐츠 표시 방식</Text>
          <Text style={styles.sectionSubtitle}>원하는 뷰 모드를 선택하세요</Text>
          
          <View style={styles.modesGrid}>
            {viewModes.map((mode, index) => (
              <TouchableOpacity
                key={mode.id}
                style={[
                  styles.modeCard,
                  selectedMode === mode.id && styles.selectedModeCard
                ]}
                onPress={() => handleImagePress(mode.id)}
              >
                <Image source={mode.image} style={styles.modeImage} />
                <View style={styles.modeOverlay}>
                  <View style={styles.modeIconContainer}>
                    <Icon 
                      name={mode.icon} 
                      size={24} 
                      color={selectedMode === mode.id ? '#9C27B0' : '#fff'} 
                    />
                  </View>
                  <View style={styles.modeInfo}>
                    <Text style={[
                      styles.modeTitle,
                      selectedMode === mode.id && styles.selectedModeTitle
                    ]}>
                      {mode.title}
                    </Text>
                    <Text style={styles.modeSubtitle}>{mode.subtitle}</Text>
                  </View>
                  {selectedMode === mode.id && (
                    <View style={styles.selectedIndicator}>
                      <Icon name="check" size={16} color="#fff" />
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
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
  backButton: {
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
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
  contentContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 24,
  },
  modesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  modeCard: {
    width: (screenWidth - 60) / 2,
    height: 200,
    borderRadius: 15,
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
  selectedModeCard: {
    borderColor: '#9C27B0',
  },
  modeImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  modeOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 15,
    justifyContent: 'space-between',
  },
  modeIconContainer: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: 8,
  },
  modeInfo: {
    alignSelf: 'flex-end',
  },
  modeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    marginBottom: 4,
  },
  selectedModeTitle: {
    color: '#9C27B0',
  },
  modeSubtitle: {
    fontSize: 12,
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  selectedIndicator: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 24,
    height: 24,
    borderRadius: 12,
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

export default HomeChangeViewModeScreen;
