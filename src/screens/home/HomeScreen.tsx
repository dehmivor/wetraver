import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { colors, spacing } from '../../constants/theme';
import Container from '../../components/layout/Container';
import Header from '../../components/layout/Header';
import Card from '../../components/ui/Card';
import Text from '../../components/ui/Text';
import Button from '../../components/ui/Button';

const HomeScreen: React.FC = () => {
  const handleSearchPress = () => {
    console.log('Search pressed');
  };

  const handleNotificationPress = () => {
    console.log('Notification pressed');
  };

  const featuredDestinations = [
    { id: 1, name: 'Hà Nội', image: '🏛️' },
    { id: 2, name: 'Hồ Chí Minh', image: '🏙️' },
    { id: 3, name: 'Đà Nẵng', image: '🏖️' },
    { id: 4, name: 'Hạ Long', image: '⛰️' },
  ];

  return (
    <Container>
      <Header
        title="WeTraver"
        rightIcon="notifications"
        onRightPress={handleNotificationPress}
      />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Welcome Section */}
        <Card style={styles.welcomeCard} padding="large">
          <Text variant="h3" color="primary">
            Chào mừng trở lại!
          </Text>
          <Text variant="body1" color="gray.600" style={styles.welcomeText}>
            Khám phá những điểm đến tuyệt vời cùng WeTraver
          </Text>
          <Button
            title="Tìm kiếm ngay"
            onPress={handleSearchPress}
            style={styles.searchButton}
          />
        </Card>

        {/* Featured Destinations */}
        <View style={styles.section}>
          <Text variant="h4" color="gray.900" style={styles.sectionTitle}>
            Điểm đến nổi bật
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroll}>
            {featuredDestinations.map((destination) => (
              <Card
                key={destination.id}
                style={styles.destinationCard}
                onPress={() => console.log(`Navigate to ${destination.name}`)}>
                <Text style={styles.destinationEmoji}>{destination.image}</Text>
                <Text variant="body2" color="gray.900" align="center">
                  {destination.name}
                </Text>
              </Card>
            ))}
          </ScrollView>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text variant="h4" color="gray.900" style={styles.sectionTitle}>
            Thao tác nhanh
          </Text>
          <View style={styles.quickActions}>
            <Card style={styles.actionCard} onPress={() => console.log('Hotels')}>
              <Text style={styles.actionEmoji}>🏨</Text>
              <Text variant="body2" color="gray.900" align="center">
                Khách sạn
              </Text>
            </Card>
            <Card style={styles.actionCard} onPress={() => console.log('Flights')}>
              <Text style={styles.actionEmoji}>✈️</Text>
              <Text variant="body2" color="gray.900" align="center">
                Vé máy bay
              </Text>
            </Card>
            <Card style={styles.actionCard} onPress={() => console.log('Tours')}>
              <Text style={styles.actionEmoji}>🗺️</Text>
              <Text variant="body2" color="gray.900" align="center">
                Tour du lịch
              </Text>
            </Card>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  welcomeCard: {
    margin: spacing.md,
    backgroundColor: colors.primary,
  },
  welcomeText: {
    marginTop: spacing.sm,
    marginBottom: spacing.lg,
    color: colors.white,
  },
  searchButton: {
    backgroundColor: colors.white,
    marginTop: spacing.md,
  },
  section: {
    marginTop: spacing.lg,
  },
  sectionTitle: {
    paddingHorizontal: spacing.md,
    marginBottom: spacing.md,
  },
  horizontalScroll: {
    paddingLeft: spacing.md,
  },
  destinationCard: {
    width: 120,
    height: 120,
    marginRight: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  destinationEmoji: {
    fontSize: 32,
    marginBottom: spacing.sm,
  },
  quickActions: {
    flexDirection: 'row',
    paddingHorizontal: spacing.md,
    justifyContent: 'space-between',
  },
  actionCard: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionEmoji: {
    fontSize: 24,
    marginBottom: spacing.sm,
  },
});

export default HomeScreen;
