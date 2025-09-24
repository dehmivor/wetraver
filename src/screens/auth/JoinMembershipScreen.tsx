import React, { useState, useLayoutEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Text as RNText } from 'react-native';
import Container from '../../components/layout/Container';
import Text from '../../components/ui/Text';
import Divider from '../../components/ui/Divider';
import Button from '../../components/ui/Button';
import { colors, spacing, borderRadius } from '../../constants/theme';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ title: '회원가입 약관 동의' });
  }, [navigation]);

  const requiredChecked = agreements.tos && agreements.privacy && agreements.age14;
  const allChecked = Object.values(agreements).every(Boolean);

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
      <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={styles.scrollContent}>
        <View style={styles.noteWrap}>
          <Text variant="caption" color="gray.600" align="center">
            아래 약관 내용에 동의 후 서비스 이용이 가능합니다.
          </Text>
        </View>

        <TouchableOpacity onPress={toggleAll} activeOpacity={0.8} style={styles.allWrap}>
          <MaterialIcons name="done" size={34} color={allChecked ? colors.primary : colors.gray[300]} />
          <View><Text variant="h4" weight="bold" style={styles.allText}>전체 동의</Text></View>
        </TouchableOpacity>

        <Divider style={styles.boldDivider} />

        <AgreementItem
          checked={agreements.tos}
          onPress={() => toggle('tos')}
          label="(필수) 서비스 이용약관"
        />
        <Divider style={styles.thinDivider} />
        <AgreementItem
          checked={agreements.privacy}
          onPress={() => toggle('privacy')}
          label="(필수) 개인정보 수집 · 이용"
        />
        <Divider style={styles.thinDivider} />
        <AgreementItem
          checked={agreements.location}
          onPress={() => toggle('location')}
          label="(선택) 위치정보 이용 동의"
        />
        <Divider style={styles.thinDivider} />
        <AgreementItem
          checked={agreements.personalized}
          onPress={() => toggle('personalized')}
          label="(선택) 개인화 추천 정보 수신 동의"
        />
        <Divider style={styles.thinDivider} />
        <AgreementItem
          checked={agreements.marketing}
          onPress={() => toggle('marketing')}
          label="(선택) 마케팅 정보 수신 동의"
        />
        <Divider style={styles.thinDivider} />
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

        <Divider style={styles.boldDivider} />
      </ScrollView>

      <View style={styles.footer}>
        <Button
          title="확인"
          onPress={() => navigation.navigate('JoinMembershipPhoneNumber' as never)}
          disabled={!requiredChecked}
          size="large"
          style={{ borderRadius: 0, height: 100, }}
        />
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
      <MaterialIcons name="done" size={24} color={checked ? colors.primary : colors.gray[300]} />
      <View style={styles.itemLabelWrap}>
        <Text variant="body1" color="gray.900">{label}</Text>
      </View>
      <MaterialIcons name="keyboard-arrow-right" size={34} color="gray" />
    </TouchableOpacity>
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
  allText: {
    marginLeft: spacing.md,
  },
  boldDivider: {
    height: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginVertical: spacing.sm,
    opacity: 0.8
  },
  thinDivider: {
    paddingVertical: 1,
    backgroundColor: '#E1E3E5',
    marginVertical: 1,
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
    marginLeft: 44,
    marginBottom: spacing.lg,
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -10,
    borderTopColor: '#EBF0F5',
  },
});

export default JoinMembershipScreen;
