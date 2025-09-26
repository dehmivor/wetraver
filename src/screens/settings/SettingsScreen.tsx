import React from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { colors, spacing } from '../../constants/theme';
import Container from '../../components/layout/Container';
import Header from '../../components/layout/Header';
import Card from '../../components/ui/Card';
import Text from '../../components/ui/Text';
import Button from '../../components/ui/Button';

const SettingsScreen: React.FC = () => {
  const handleNotificationSettings = () => {
    Alert.alert('Chức năng', 'Cài đặt thông báo');
  };

  const handlePrivacySettings = () => {
    Alert.alert('Chức năng', 'Cài đặt quyền riêng tư');
  };

  const handleLanguageSettings = () => {
    Alert.alert('Chức năng', 'Cài đặt ngôn ngữ');
  };

  const handleThemeSettings = () => {
    Alert.alert('Chức năng', 'Cài đặt giao diện');
  };

  const handleAbout = () => {
    Alert.alert('Về ứng dụng', 'WeTraver v1.0.0\nỨng dụng du lịch tốt nhất');
  };

  const settingsItems = [
    {
      id: 1,
      title: 'Thông báo',
      subtitle: 'Quản lý thông báo',
      icon: '🔔',
      onPress: handleNotificationSettings,
    },
    {
      id: 2,
      title: 'Quyền riêng tư',
      subtitle: 'Cài đặt bảo mật',
      icon: '🔒',
      onPress: handlePrivacySettings,
    },
    {
      id: 3,
      title: 'Ngôn ngữ',
      subtitle: 'Tiếng Việt',
      icon: '🌐',
      onPress: handleLanguageSettings,
    },
    {
      id: 4,
      title: 'Giao diện',
      subtitle: 'Chế độ sáng',
      icon: '🎨',
      onPress: handleThemeSettings,
    },
    {
      id: 5,
      title: 'Về ứng dụng',
      subtitle: 'Phiên bản 1.0.0',
      icon: 'ℹ️',
      onPress: handleAbout,
    },
  ];

  return (
    <Container>
      <Header title="Cài đặt" showBackButton />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text variant="h4" color="gray.900" style={styles.sectionTitle}>
            Cài đặt chung
          </Text>

          {settingsItems.map((item) => (
            <Card
              key={item.id}
              style={styles.settingItem}
              onPress={item.onPress}
              variant="outlined"
            >
              <View style={styles.settingItemContent}>
                <Text style={styles.settingIcon}>{item.icon}</Text>
                <View style={styles.settingTextContainer}>
                  <Text variant="body1" color="gray.900">
                    {item.title}
                  </Text>
                  <Text variant="body2" color="gray.600">
                    {item.subtitle}
                  </Text>
                </View>
                <Text style={styles.settingArrow}>›</Text>
              </View>
            </Card>
          ))}
        </View>

        <View style={styles.section}>
          <Text variant="h4" color="gray.900" style={styles.sectionTitle}>
            Hỗ trợ
          </Text>

          <Card
            style={styles.settingItem}
            onPress={() => Alert.alert('Chức năng', 'Trung tâm trợ giúp')}
            variant="outlined"
          >
            <View style={styles.settingItemContent}>
              <Text style={styles.settingIcon}>❓</Text>
              <View style={styles.settingTextContainer}>
                <Text variant="body1" color="gray.900">
                  Trung tâm trợ giúp
                </Text>
                <Text variant="body2" color="gray.600">
                  Câu hỏi thường gặp
                </Text>
              </View>
              <Text style={styles.settingArrow}>›</Text>
            </View>
          </Card>

          <Card
            style={styles.settingItem}
            onPress={() => Alert.alert('Chức năng', 'Liên hệ hỗ trợ')}
            variant="outlined"
          >
            <View style={styles.settingItemContent}>
              <Text style={styles.settingIcon}>📞</Text>
              <View style={styles.settingTextContainer}>
                <Text variant="body1" color="gray.900">
                  Liên hệ hỗ trợ
                </Text>
                <Text variant="body2" color="gray.600">
                  Gửi phản hồi
                </Text>
              </View>
              <Text style={styles.settingArrow}>›</Text>
            </View>
          </Card>
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  section: {
    marginTop: spacing.lg,
  },
  sectionTitle: {
    paddingHorizontal: spacing.md,
    marginBottom: spacing.md,
  },
  settingItem: {
    marginHorizontal: spacing.md,
    marginBottom: spacing.sm,
    paddingVertical: 0,
  },
  settingItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
  },
  settingIcon: {
    fontSize: 20,
    marginRight: spacing.md,
  },
  settingTextContainer: {
    flex: 1,
  },
  settingArrow: {
    fontSize: 18,
    color: colors.gray[400],
  },
});

export default SettingsScreen;
