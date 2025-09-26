import React, { useMemo, useState, ReactNode } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Container from '../../components/layout/Container';
import Text from '../../components/ui/Text';
import Divider from '../../components/ui/Divider';
import Button from '../../components/ui/Button';
import { colors, spacing, borderRadius } from '../../constants/theme';

// Simple chip button for multi-select
const Chip: React.FC<{
  label: string;
  active: boolean;
  onPress: () => void;
}> = ({ label, active, onPress }) => (
  <TouchableOpacity
    activeOpacity={0.85}
    onPress={onPress}
    style={[styles.chip, active ? styles.chipActive : styles.chipInactive]}
  >
    <Text variant="body2" color={active ? '#3F3BFF' : 'gray.700'}>
      {label}
    </Text>
  </TouchableOpacity>
);

// Section wrapper with children
const Section: React.FC<{ title: string; children?: ReactNode }> = ({
  title,
  children,
}) => (
  <View style={{ marginBottom: spacing.lg }}>
    <Text variant="body2" style={{ marginBottom: spacing.sm }}>
      {title}
    </Text>
    <View style={styles.rowWrap}>{children}</View>
  </View>
);

// helper for toggling items in a Set
const toggleInSet = (
  setter: React.Dispatch<React.SetStateAction<Set<string>>>,
  key: string,
) => {
  setter(prev => {
    const next = new Set(prev);
    if (next.has(key)) next.delete(key);
    else next.add(key);
    return next;
  });
};

const OnboardingScreen: React.FC = () => {
  const [interests, setInterests] = useState<Set<string>>(new Set());
  const [style, setStyle] = useState<Set<string>>(new Set());
  const [preference, setPreference] = useState<Set<string>>(new Set());
  const [duration, setDuration] = useState<Set<string>>(new Set());

  const canContinue = useMemo(() => {
    return (
      interests.size > 0 ||
      style.size > 0 ||
      preference.size > 0 ||
      duration.size > 0
    );
  }, [interests.size, style.size, preference.size, duration.size]);

  return (
    <Container padding="large">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: spacing['3xl'] }}
      >
        <Text variant="h4" style={{ marginTop: spacing.md }}>
          새로운 여행 경험, 위트래버
        </Text>
        <Text variant="body2" color="gray.600" style={{ marginTop: spacing.sm }}>
          함께 여행 취향을 알아 봐요. 나와 잘 맞는 여행자와 컨텐츠를 만날 수 있어요.
        </Text>

        <Divider style={{ marginVertical: spacing.lg }} />

        <Section title="여행 관심사">
          {[
            '현지 음식 탐방',
            '역사와 문화 체험',
            '자연 속 힐링',
            '액티브한 야외활동',
            '럭셔리/스파',
            '캠핑/차박',
          ].map(k => (
            <Chip
              key={k}
              label={k}
              active={interests.has(k)}
              onPress={() => toggleInSet(setInterests, k)}
            />
          ))}
        </Section>

        <Section title="나의 여행 스타일">
          {[
            '혼자만의 여유로운 여행',
            '친구, 가족과 함께하는 여행',
            '현지인처럼 살아보기',
            '계획 없이 떠나는 즉흥 여행',
          ].map(k => (
            <Chip
              key={k}
              label={k}
              active={style.has(k)}
              onPress={() => toggleInSet(setStyle, k)}
            />
          ))}
        </Section>

        <Section title="여행 취향">
          {[
            '가성비 여행',
            '적당한 예산으로 즐기는 여행',
            '여유로운 여행',
            '특별한 경험, 프리미엄 여행',
          ].map(k => (
            <Chip
              key={k}
              label={k}
              active={preference.has(k)}
              onPress={() => toggleInSet(setPreference, k)}
            />
          ))}
        </Section>

        <Section title="여행 기간">
          {[
            '주말이나 짧은 여행',
            '일주일 이상 여유있는 여행',
            '일정 미정인 장기 여행',
            '자유로운 일정',
          ].map(k => (
            <Chip
              key={k}
              label={k}
              active={duration.has(k)}
              onPress={() => toggleInSet(setDuration, k)}
            />
          ))}
        </Section>
      </ScrollView>

      {/* Footer button style matches JoinMembershipVerificationScreen */}
      <View style={styles.footer}>
        <Button
          title="WeTraver 시작하기"
          onPress={() => {
            // navigate to home or next step
          }}
          disabled={!canContinue}
          size="large"
          style={{
            borderRadius: 0,
            height: 100,
            backgroundColor: canContinue
              ? colors.primary
              : colors.gray[300],
          }}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  rowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  chip: {
    borderWidth: 1,
    borderRadius: borderRadius.lg,
    paddingVertical: 10,
    paddingHorizontal: spacing.md,
  },
  chipInactive: {
    borderColor: colors.gray[300],
    backgroundColor: colors.white,
  },
  chipActive: {
    borderColor: '#D9D7FF',
    backgroundColor: '#F3F2FF',
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -10,
    borderTopColor: '#EBF0F5',
  },
});

export default OnboardingScreen;
