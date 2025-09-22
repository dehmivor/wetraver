import React, { useMemo, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Container from '../../components/layout/Container';
import Text from '../../components/ui/Text';
import Divider from '../../components/ui/Divider';
import Button from '../../components/ui/Button';
import { colors, spacing, borderRadius } from '../../constants/theme';

type AgreementKey =
  | 'tos'
  | 'privacy'
  | 'location'
  | 'personalized'
  | 'marketing'
  | 'age14';

const JoinMembershipScreen: React.FC = () => {
  const [agreements, setAgreements] = useState<Record<AgreementKey, boolean>>({
    tos: false,
    privacy: false,
    location: false,
    personalized: false,
    marketing: false,
    age14: false,
  });

  const requiredChecked = useMemo(() => agreements.tos && agreements.privacy && agreements.age14, [agreements]);
  const allChecked = useMemo(
    () => Object.values(agreements).every(Boolean),
    [agreements]
  );

  const toggleAll = () => {
    const next = !allChecked;
    setAgreements({
      tos: next,
      privacy: next,
      location: next,
      personalized: next,
      marketing: next,
      age14: next,
    });
  };

  const toggle = (key: AgreementKey) => {
    setAgreements(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Container padding="large">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.noteWrap}>
          <Text variant="caption" color="gray.600" align="center">
            아래 약관 내용에 동의 후 서비스 이용이 가능합니다.
          </Text>
        </View>

        <TouchableOpacity onPress={toggleAll} activeOpacity={0.8} style={styles.allWrap}>
          <Checkbox checked={allChecked} />
          <Text variant="h4" weight="bold">전체 동의</Text>
        </TouchableOpacity>

        <Divider />

        <AgreementItem
          checked={agreements.tos}
          onPress={() => toggle('tos')}
          label="(필수) 서비스 이용약관"
        />
        <AgreementItem
          checked={agreements.privacy}
          onPress={() => toggle('privacy')}
          label="(필수) 개인정보 수집 · 이용"
        />
        <AgreementItem
          checked={agreements.location}
          onPress={() => toggle('location')}
          label="(선택) 위치정보 이용 동의"
        />
        <AgreementItem
          checked={agreements.personalized}
          onPress={() => toggle('personalized')}
          label="(선택) 개인화 추천 정보 수신 동의"
        />
        <AgreementItem
          checked={agreements.marketing}
          onPress={() => toggle('marketing')}
          label="(선택) 마케팅 정보 수신 동의"
        />
        <AgreementItem
          checked={agreements.age14}
          onPress={() => toggle('age14')}
          label="(필수) 만 14세 이상입니다."
        />

        <View style={styles.helperWrap}>
          <Text variant="caption" color="gray.500" align="left">
            본 서비스는 만 14세 미만 고객에게 제공되지 않습니다.
          </Text>
          <Text variant="caption" color="gray.500" align="left">
            본인이 만 14세 이상이라면 체크박스를 선택해주세요.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button title="확인" onPress={() => {}} disabled={!requiredChecked} size="large" />
      </View>
    </Container>
  );
};

const AgreementItem: React.FC<{ checked: boolean; onPress: () => void; label: string }> = ({
  checked,
  onPress,
  label,
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={styles.itemRow}>
      <Checkbox checked={checked} />
      <View style={styles.itemLabelWrap}>
        <Text variant="body1" color="gray.900">{label}</Text>
      </View>
      <Text variant="body2" color="gray.400">›</Text>
    </TouchableOpacity>
  );
};

const Checkbox: React.FC<{ checked: boolean }> = ({ checked }) => {
  return (
    <View style={[styles.checkboxBox, checked && styles.checkboxChecked]}>
      {checked ? <Text variant="button" color={colors.white} align="center">✓</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: spacing['3xl'],
  },
  noteWrap: {
    backgroundColor: colors.gray[100],
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  allWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingVertical: spacing.md,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
  },
  itemLabelWrap: {
    flex: 1,
    marginLeft: spacing.md,
  },
  helperWrap: {
    marginTop: spacing.sm,
    gap: 2,
  },
  footer: {
    position: 'absolute',
    left: spacing.lg,
    right: spacing.lg,
    bottom: spacing.lg,
  },
  checkboxBox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.gray[300],
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  checkboxChecked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
});

export default JoinMembershipScreen;

