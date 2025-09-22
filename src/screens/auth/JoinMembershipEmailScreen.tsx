import React, { useMemo, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Container from '../../components/layout/Container';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import Text from '../../components/ui/Text';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors, spacing, borderRadius } from '../../constants/theme';

const emailRegex = /^(?:[a-zA-Z0-9_'^&\+\-])+(?:\.(?:[a-zA-Z0-9_'^&\+\-])+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

const JoinMembershipEmailScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const isValid = useMemo(() => emailRegex.test(email), [email]);

  return (
    <Container padding="large">
      <Input
        placeholder="abcdef.wetraver@naver.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        leftIcon="email"
        rightIcon={email ? 'close' : undefined}
        onRightIconPress={() => setEmail('')}
      />

      <View style={styles.orWrap}>
        <View style={styles.orLine} />
        <Text variant="caption" color="gray.400">또는</Text>
        <View style={styles.orLine} />
      </View>

      <View style={{ gap: spacing.sm }}>
        <SocialButton label="전화번호로 로그인하기" icon="phone-android" />
        <SocialButton label="네이버로 로그인하기" icon="public" />
        <SocialButton label="페이스북으로 로그인하기" icon="facebook" />
        <SocialButton label="구글로 로그인하기" icon="google" />
        <SocialButton label="Apple로 로그인하기" icon="apple" />
      </View>

      <View style={styles.footer}>
        <Button title="다음" onPress={() => {}} disabled={!isValid} size="large" />
      </View>
    </Container>
  );
};

const SocialButton: React.FC<{ label: string; icon: string }> = ({ label, icon }) => (
  <TouchableOpacity activeOpacity={0.8} style={styles.socialBtn}>
    <View style={styles.socialContent}>
      <Icon name={icon} size={20} color={colors.gray[700]} style={{ marginRight: spacing.md }} />
      <Text variant="body1" color="gray.900">{label}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  orWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginVertical: spacing.md,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.gray[200],
  },
  socialBtn: {
    height: 48,
    borderWidth: 1,
    borderColor: colors.gray[300],
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.white,
  },
  socialContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footer: {
    position: 'absolute',
    left: spacing.lg,
    right: spacing.lg,
    bottom: spacing.lg,
  },
});

export default JoinMembershipEmailScreen;


