import React, { useMemo, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Container from '../../components/layout/Container';
import Text from '../../components/ui/Text';
import Input from '../../components/ui/Input';
import Divider from '../../components/ui/Divider';
import Button from '../../components/ui/Button';
import { colors, spacing, borderRadius } from '../../constants/theme';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SOCIAL_ICONS = {
  email: 'envelope',
  public: 'globe',
  facebook: 'facebook',
  google: 'google',
  apple: 'apple',
};

const SOCIAL_COLORS: Record<string, string> = {
  email: colors.gray[900],
  public: '#03C75A', // 네이버 green
  facebook: '#1877F2',
  google: '#DB4437',
  apple: '#000000',
};

const SOCIAL_LABELS: Record<string, string> = {
  email: '이메일',
  public: '네이버',
  facebook: '페이스북',
  google: '구글',
  apple: 'Apple',
};

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

  const isValid = useMemo(
    () => country.trim().length > 0 && phone.trim().length > 0,
    [country, phone],
  );

  return (
    <Container padding="large">
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setDropdownOpen((prev) => !prev)}
          style={styles.selectBox}
        >
          <Text variant="body1" color={country ? 'gray.900' : 'gray.400'}>
            {country ? countryOptions.find((o) => o.value === country)?.label : '국가/지역'}
          </Text>
          <Text variant="body1" color="gray.400">
            ▾
          </Text>
        </TouchableOpacity>

        {dropdownOpen && (
          <View style={styles.dropdownMenu}>
            {countryOptions.map((opt) => (
              <TouchableOpacity
                key={opt.value}
                activeOpacity={0.8}
                style={styles.dropdownItem}
                onPress={() => {
                  setCountry(opt.value);
                  setDropdownOpen(false);
                }}
              >
                <Text variant="body1" color="gray.900">
                  {opt.label}
                </Text>
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
        style={{ marginTop: spacing.md }}
      />

      <View style={styles.helperWrap}>
        <Text variant="caption" color="#313233" align="center">
          통화나 문자로 전화번호를 확인하겠습니다.
        </Text>
        <Text variant="caption" color="#313233" align="center">
          일반 문자 메시지 요금 및 데이터 요금이 부과됩니다.
        </Text>
      </View>

      <View style={styles.orDividerContainer}>
        <Divider style={{ flex: 1, height: 1, marginRight: 10 }} />
        <Text variant="caption" color="gray.400">
          또는
        </Text>
        <Divider style={{ flex: 1, height: 1, marginLeft: 10 }} />
      </View>

      <View style={styles.socialContainer}>
        {(Object.keys(SOCIAL_ICONS) as Array<keyof typeof SOCIAL_ICONS>).map((key) => (
          <SocialButton
            key={key}
            label={`${SOCIAL_LABELS[key]}로 로그인하기`}
            icon={SOCIAL_ICONS[key]}
            color={SOCIAL_COLORS[key]}
          />
        ))}
      </View>

      <View style={styles.footer}>
        <Button
          title="확인"
          onPress={() => navigation.navigate('JoinMembershipPhoneNumberCheck' as never)}
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
  color: string;
}> = ({ label, icon, color }) => (
  <TouchableOpacity
    style={[styles.socialBtn, { flexDirection: 'row', alignItems: 'center' }]}
    activeOpacity={0.8}
  >
    <FontAwesome name={icon} size={20} color={color} />
    <Text variant="body1" color="gray.900" style={{ marginLeft: spacing.sm }}>
      {label}
    </Text>
  </TouchableOpacity>
);

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
  orDividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.lg,
    marginBottom: spacing.lg,
  },
  socialContainer: {
    gap: spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    width: '100%',
    borderWidth: 1,
    borderColor: colors.gray[300],
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.white,
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

export default JoinMembershipPhoneNumberScreen;
