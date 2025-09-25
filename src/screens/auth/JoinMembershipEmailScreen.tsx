import React, { useMemo, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Container from '../../components/layout/Container';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import Text from '../../components/ui/Text';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors, spacing, borderRadius } from '../../constants/theme';
import { useNavigation } from '@react-navigation/native';

// Regular expression for RFC 5322 compliant email validation (simplified)
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const JoinMembershipEmailScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  // Email validation using regex
  const isValid = useMemo(() => EMAIL_REGEX.test(email.trim()), [email]);

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
        <Text variant="caption" color="gray.400">
          또는
        </Text>
        <View style={styles.orLine} />
      </View>

      <View style={{ gap: spacing.sm }}>
        <SocialButton label="전화번호로 로그인하기" icon="phone-android" />
        <SocialButton
          label="네이버로 로그인하기"
          icon="public"
          color="#03C75A"
        />
        <SocialButton
          label="페이스북으로 로그인하기"
          icon="facebook"
          color="#1877F2"
        />
        <SocialButton label="구글로 로그인하기" icon="google" color="#DB4437" />
        <SocialButton label="Apple로 로그인하기" icon="apple" color="#000" />
      </View>

      <View style={styles.footer}>
        <Button
          title="다음"
          onPress={() =>
            navigation.navigate('JoinMembershipEmailCheck' as never)
          }
          disabled={!isValid}
          size="large"
          style={{ borderRadius: 0, height: 100 }}
        />
      </View>
    </Container>
  );
};

const SocialButton: React.FC<{
  label: string;
  icon: string;
  color?: string;
}> = ({ label, icon, color = colors.gray[700] }) => (
  <TouchableOpacity activeOpacity={0.8} style={styles.socialBtn}>
    <Icon
      name={icon}
      size={20}
      color={color}
      style={{ marginRight: spacing.md }}
    />
    <Text variant="body1" color="gray.900">
      {label}
    </Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.sm,
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -10,
    borderTopColor: '#EBF0F5',
  },
});

export default JoinMembershipEmailScreen;
