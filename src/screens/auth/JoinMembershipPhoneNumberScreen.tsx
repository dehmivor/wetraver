import React, { useMemo, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Container from '../../components/layout/Container';
import Text from '../../components/ui/Text';
import Input from '../../components/ui/Input';
import Divider from '../../components/ui/Divider';
import Button from '../../components/ui/Button';
import { colors, spacing, borderRadius } from '../../constants/theme';

const JoinMembershipPhoneNumberScreen: React.FC = () => {
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');

  const isValid = useMemo(() => !!country && /^\d{8,15}$/.test(phone.replace(/\D/g, '')), [country, phone]);

  return (
    <Container padding="large">
      <View style={styles.selectBox}>
        <Text variant="body1" color="gray.400">국가/지역</Text>
      </View>

      <Input
        placeholder="전화번호"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        leftIcon="phone"
        style={{ marginTop: spacing.md }}
      />

      <View style={styles.helperWrap}>
        <Text variant="caption" color="gray.500" align="center">
          통화나 문자로 전화번호를 확인하겠습니다.
        </Text>
        <Text variant="caption" color="gray.500" align="center">
          일반 문자 메시지 요금 및 데이터 요금이 부과됩니다.
        </Text>
      </View>

      <Divider />

      <View style={{ gap: spacing.sm }}>
        <SocialButton label="이메일로 로그인하기" icon="email" />
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

const SocialButton: React.FC<{ label: string; icon: string }> = ({ label, icon }) => {
  return (
    <View style={styles.socialBtn}>
      <Text variant="body1" color="gray.900">{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  selectBox: {
    borderWidth: 1,
    borderColor: colors.gray[300],
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    height: 48,
    justifyContent: 'center',
  },
  helperWrap: {
    marginTop: spacing.sm,
    marginBottom: spacing.lg,
    gap: 2,
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
  footer: {
    position: 'absolute',
    left: spacing.lg,
    right: spacing.lg,
    bottom: spacing.lg,
  },
});

export default JoinMembershipPhoneNumberScreen;


