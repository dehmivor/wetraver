import React, { useMemo, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Container from '../../components/layout/Container';
import Text from '../../components/ui/Text';
import Input from '../../components/ui/Input';
import Divider from '../../components/ui/Divider';
import Button from '../../components/ui/Button';
import { colors, spacing, borderRadius } from '../../constants/theme';

const emailRegex =
  /^(?:[a-zA-Z0-9_'^&\+\-])+(?:\.(?:[a-zA-Z0-9_'^&\+\-])+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
const hasLetter = (s: string) => /[A-Za-z가-힣]/.test(s);
const hasNumber = (s: string) => /\d/.test(s);
const hasSpecial = (s: string) => /[^A-Za-z0-9가-힣]/.test(s);

const COUNTRY_OPTIONS = [
  { label: '대한민국', value: 'KR' },
  { label: '일본', value: 'JP' },
  { label: '미국', value: 'US' },
];

const JoinMembershipVerificationScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [region, setRegion] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreeMarketing, setAgreeMarketing] = useState(false);

  const passwordValid = useMemo(() => {
    const lenOk = password.length >= 8 && password.length <= 20;
    return lenOk && hasLetter(password) && hasNumber(password) && hasSpecial(password);
  }, [password]);

  const requiredValid = useMemo(() => name.trim().length > 0 && agreePrivacy, [agreePrivacy]);

  return (
    <Container padding="large">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: spacing['3xl'] }}
      >
        <Input placeholder="실명  (예 : 홍 길동)" value={name} onChangeText={setName} />
        <Text
          variant="caption"
          color="gray.500"
          style={{ marginTop: -spacing.sm, marginBottom: spacing.md }}
        >
          정부 발급 신분증에 기재된 이름과 일치해야 합니다.
        </Text>

        <Input
          placeholder="생년월일"
          value={birth}
          onChangeText={setBirth}
          keyboardType="numeric"
        />
        <Text
          variant="caption"
          color="gray.500"
          style={{ marginTop: -spacing.sm, marginBottom: spacing.md }}
        >
          18세 이상의 성인만 회원으로 가입할 수 있습니다. 해당 정보는 다른 이용자에게 공개되지
          않습니다.
        </Text>

        <TouchableOpacity
          style={styles.selectBox}
          activeOpacity={0.8}
          onPress={() => setDropdownOpen(!dropdownOpen)}
        >
          <Text variant="body1" color={country ? 'gray.900' : 'gray.400'}>
            {country ? COUNTRY_OPTIONS.find(({ value }) => value === country)?.label : '국가/지역'}
          </Text>
          <Text variant="body1" color="gray.400">
            ▾
          </Text>
        </TouchableOpacity>

        {dropdownOpen && (
          <View style={styles.dropdownMenu}>
            {COUNTRY_OPTIONS.map(({ label, value }) => (
              <TouchableOpacity
                key={value}
                activeOpacity={0.8}
                style={styles.dropdownItem}
                onPress={() => {
                  setCountry(value);
                  setDropdownOpen(false);
                }}
              >
                <Text variant="body1" color="gray.900">
                  {label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <Input
          placeholder="전화번호"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
        <Input
          placeholder="이메일"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Input
          placeholder="비밀번호"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          rightIcon="visibility"
        />

        <View style={styles.passwordHints}>
          <HintItem label="영문" active={hasLetter(password)} />
          <HintItem label="숫자" active={hasNumber(password)} />
          <HintItem label="특수문자" active={hasSpecial(password)} />
          <HintItem
            label="8자 이상 20자 이하"
            active={password.length >= 8 && password.length <= 20}
          />
        </View>

        <Input placeholder="활동 지역" value={region} onChangeText={setRegion} />
        <Text variant="caption" color="gray.500">
          위트래버를 원활하게 이용하려면 활동지역을 설정해주세요. 설정된 지역을 바탕으로 맞춤형 여행
          서비스를 제공합니다.
        </Text>

        <Divider />

        <AgreementRow
          label="(필수) 개인정보 수집 및 이용 동의"
          checked={agreePrivacy}
          onPress={() => setAgreePrivacy(!agreePrivacy)}
        />
        <Divider />
        <AgreementRow
          label="(선택) 마케팅 이메일 수신 동의"
          checked={agreeMarketing}
          onPress={() => setAgreeMarketing(!agreeMarketing)}
        />

        <Text variant="caption" color="gray.500" style={{ marginTop: spacing.md }}>
          동의 및 계속하기를 선택하여 위트래버 서비스 약관, 결제 서비스 약관, 위치기반서비스
          이용약관, 차별 금지 정책, 개인정보 처리방침에 동의합니다.
        </Text>
      </ScrollView>

      <View style={styles.footer}>
        <Button
          title="다음"
          onPress={() => {
            // Navigate or submit
          }}
          disabled={!requiredValid}
          size="large"
          style={{
            borderRadius: 0,
            height: 100,
            backgroundColor: requiredValid ? colors.primary : colors.gray[300],
          }}
        />
      </View>
    </Container>
  );
};

const AgreementRow: React.FC<{
  label: string;
  checked: boolean;
  onPress: () => void;
}> = ({ label, checked, onPress }) => (
  <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.agreeRow}>
    <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
      {checked ? (
        <Text variant="button" color={'#fff'} align="center">
          ✓
        </Text>
      ) : null}
    </View>
    <Text variant="body1" style={{ flex: 1 }}>
      {label}
    </Text>
    <Text variant="body2" color="gray.400">
      ›
    </Text>
  </TouchableOpacity>
);

const HintItem: React.FC<{ label: string; active: boolean }> = ({ label, active }) => (
  <View style={styles.hintItem}>
    <View
      style={[styles.hintDot, { backgroundColor: active ? colors.primary : colors.gray[300] }]}
    />
    <Text variant="caption" color={active ? colors.primary : colors.gray[500]}>
      {label}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  selectBox: {
    borderWidth: 1,
    borderColor: colors.gray[300],
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    height: 48,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  dropdownMenu: {
    borderWidth: 1,
    borderColor: colors.gray[300],
    borderRadius: borderRadius.md,
    overflow: 'hidden',
    marginBottom: spacing.md,
  },
  dropdownItem: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    borderBottomColor: colors.gray[300],
    borderBottomWidth: 1,
  },
  passwordHints: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
    marginTop: spacing.xs,
    marginBottom: spacing.md,
  },
  hintItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  hintDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  agreeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.gray[300],
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
    backgroundColor: colors.white,
  },
  checkboxChecked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -10,
    borderTopColor: '#EBF0F5',
  },
});

export default JoinMembershipVerificationScreen;
