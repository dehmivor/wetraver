import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { colors, spacing } from '../../constants/theme';
import Container from '../../components/layout/Container';
import Header from '../../components/layout/Header';
import Card from '../../components/ui/Card';
import Text from '../../components/ui/Text';
import Button from '../../components/ui/Button';
import Avatar from '../../components/ui/Avatar';

const ProfileScreen: React.FC = () => {
  const [user] = useState({
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@example.com',
    phone: '0123456789',
    joinDate: 'Tháng 1, 2024',
  });

  const handleEditProfile = () => {
    Alert.alert('Chức năng', 'Chỉnh sửa thông tin cá nhân');
  };

  const handleSettings = () => {
    Alert.alert('Chức năng', 'Cài đặt ứng dụng');
  };

  const handleLogout = () => {
    Alert.alert(
      'Đăng xuất',
      'Bạn có chắc chắn muốn đăng xuất?',
      [
        { text: 'Hủy', style: 'cancel' },
        {
          text: 'Đăng xuất',
          style: 'destructive',
          onPress: () => {
            // TODO: Implement logout logic
            console.log('User logged out');
          },
        },
      ]
    );
  };

  const menuItems = [
    {
      id: 1,
      title: 'Lịch sử đặt tour',
      icon: '📅',
      onPress: () => Alert.alert('Chức năng', 'Lịch sử đặt tour'),
    },
    {
      id: 2,
      title: 'Yêu thích',
      icon: '❤️',
      onPress: () => Alert.alert('Chức năng', 'Danh sách yêu thích'),
    },
    {
      id: 3,
      title: 'Đánh giá của tôi',
      icon: '⭐',
      onPress: () => Alert.alert('Chức năng', 'Đánh giá của tôi'),
    },
    {
      id: 4,
      title: 'Hỗ trợ',
      icon: '💬',
      onPress: () => Alert.alert('Chức năng', 'Hỗ trợ khách hàng'),
    },
    {
      id: 5,
      title: 'Giới thiệu',
      icon: 'ℹ️',
      onPress: () => Alert.alert('Giới thiệu', 'WeTraver v1.0.0'),
    },
  ];

  return (
    <Container>
      <Header title="Hồ sơ" rightIcon="settings" onRightPress={handleSettings} />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <Card style={styles.profileCard} padding="large">
          <View style={styles.profileHeader}>
            <Avatar name={user.name} size="xlarge" />
            <View style={styles.userInfo}>
              <Text variant="h3" color="gray.900">
                {user.name}
              </Text>
              <Text variant="body2" color="gray.600">
                {user.email}
              </Text>
              <Text variant="caption" color="gray.500">
                Tham gia {user.joinDate}
              </Text>
            </View>
          </View>
          <Button
            title="Chỉnh sửa hồ sơ"
            variant="outline"
            onPress={handleEditProfile}
            style={styles.editButton}
          />
        </Card>

        {/* Menu Items */}
        <View style={styles.menuSection}>
          {menuItems.map((item) => (
            <Card
              key={item.id}
              style={styles.menuItem}
              onPress={item.onPress}
              variant="outlined">
              <View style={styles.menuItemContent}>
                <Text style={styles.menuIcon}>{item.icon}</Text>
                <Text variant="body1" color="gray.900" style={styles.menuText}>
                  {item.title}
                </Text>
                <Text style={styles.menuArrow}>›</Text>
              </View>
            </Card>
          ))}
        </View>

        {/* Logout Button */}
        <View style={styles.logoutSection}>
          <Button
            title="Đăng xuất"
            variant="outline"
            onPress={handleLogout}
            style={styles.logoutButton}
          />
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  profileCard: {
    margin: spacing.md,
    backgroundColor: colors.white,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  userInfo: {
    flex: 1,
    marginLeft: spacing.md,
  },
  editButton: {
    marginTop: spacing.sm,
  },
  menuSection: {
    paddingHorizontal: spacing.md,
  },
  menuItem: {
    marginBottom: spacing.sm,
    paddingVertical: 0,
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
  },
  menuIcon: {
    fontSize: 20,
    marginRight: spacing.md,
  },
  menuText: {
    flex: 1,
  },
  menuArrow: {
    fontSize: 18,
    color: colors.gray[400],
  },
  logoutSection: {
    paddingHorizontal: spacing.md,
    marginTop: spacing.lg,
    marginBottom: spacing.xl,
  },
  logoutButton: {
    borderColor: colors.error,
  },
});

export default ProfileScreen;
