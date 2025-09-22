import React, { useMemo, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Container from '../../components/layout/Container';
import Text from '../../components/ui/Text';
import Input from '../../components/ui/Input';
import Divider from '../../components/ui/Divider';
import Button from '../../components/ui/Button';
import { colors, spacing, borderRadius } from '../../constants/theme';
import { useNavigation } from '@react-navigation/native';

const JoinMembershipPhoneNumberScreen: React.FC = () => {
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const navigation = useNavigation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const countryOptions = [
    { label: '대한민국 (+82)', value: '+82' },
    { label: '일본 (+81)', value: '+81' },
    { label: '미국 (+1)', value: '+1' },
  ];

  const isValid = useMemo(() => country.trim().length > 0 && phone.trim().length > 0, [country, phone]);

  return (
    <Container padding="large">
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setDropdownOpen(prev => !prev)}
          style={styles.selectBox}
        >
          <Text variant="body1" color={country ? 'gray.900' : 'gray.400'}>
            {country ? countryOptions.find(o => o.value === country)?.label : '국가/지역'}
          </Text>
          <Text variant="body1" color="gray.400">▾</Text>
        </TouchableOpacity>

        {dropdownOpen && (
          <View style={styles.dropdownMenu}>
            {countryOptions.map(opt => (
              <TouchableOpacity
                key={opt.value}
                activeOpacity={0.8}
                style={styles.dropdownItem}
                onPress={() => { setCountry(opt.value); setDropdownOpen(false); }}
              >
                <Text variant="body1" color="gray.900">{opt.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
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
        <Button
          title="다음"
          onPress={() => navigation.navigate('JoinMembershipPhoneNumberCheck' as never)}
          disabled={!isValid}
          size="large"
        />
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
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  helperWrap: {
    marginTop: spacing.sm,
    marginBottom: spacing.lg,
    gap: 2,
  },
  dropdownMenu: {
    marginTop: 4,
    borderWidth: 1,
    borderColor: colors.gray[200],
    borderRadius: borderRadius.md,
    backgroundColor: colors.white,
    overflow: 'hidden',
  },
  dropdownItem: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[100],
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


