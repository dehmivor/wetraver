import React, { useMemo, useRef, useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Container from '../../components/layout/Container';
import Text from '../../components/ui/Text';
import Button from '../../components/ui/Button';
import { colors, spacing } from '../../constants/theme';
import { useNavigation } from '@react-navigation/native';

const CODE_LENGTH = 6;

const JoinMembershipPhoneNumberCheckScreen: React.FC = () => {
  const [code, setCode] = useState<string>('');
  const inputRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  const isValid = useMemo(() => code.length === CODE_LENGTH, [code]);

  const handlePressCell = () => inputRef.current?.focus();
  const cells = Array.from({ length: CODE_LENGTH }).map((_, idx) => code[idx] || '');

  return (
    <Container padding="large">
      <View style={{ alignItems: 'center', marginTop: spacing.lg }}>
        <Text variant="h4" weight="bold">전화번호 인증하기</Text>
      </View>
      <View style={{ alignItems: 'center', marginVertical: spacing.lg }}>
        <Text variant="body2" align="center">
          문자 메시지를 통해 010-2295-1902번으로{`\n`}보내드린 코드를 입력하세요.
        </Text>
      </View>

      <TouchableOpacity activeOpacity={1} onPress={handlePressCell} style={styles.codeRow}>
        {cells.map((c, i) => (
          <View key={i} style={styles.codeCell}>
            <Text variant="h3" align="center">{c}</Text>
            <View style={styles.codeUnderline} />
          </View>
        ))}
        <TextInput
          ref={inputRef}
          style={styles.hiddenInput}
          value={code}
          onChangeText={t => setCode(t.replace(/[^0-9]/g, '').slice(0, CODE_LENGTH))}
          keyboardType="number-pad"
          autoFocus
        />
      </TouchableOpacity>

      <View style={{ alignItems: 'center', marginTop: spacing.md }}>
        <Text variant="caption" color="gray.500">
          코드를 받지 못하셨나요?{' '}
          <Text variant="caption" color={colors.primary}>다시 보내기</Text>
        </Text>
      </View>

      <View style={styles.footer}>
        <Button
          title="다음"
          onPress={() => navigation.navigate('JoinMembershipEmail' as never)}
          disabled={!isValid}
          size="large"
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  codeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: spacing.lg,
    marginTop: spacing.xl,
  },
  codeCell: {
    width: 42,
    alignItems: 'center',
  },
  codeUnderline: {
    width: 42,
    height: 2,
    backgroundColor: colors.gray[300],
    marginTop: spacing.sm,
  },
  hiddenInput: {
    position: 'absolute',
    opacity: 0,
  },
  footer: {
    position: 'absolute',
    left: spacing.lg,
    right: spacing.lg,
    bottom: spacing.lg,
  },
});

export default JoinMembershipPhoneNumberCheckScreen;


