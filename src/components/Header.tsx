import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  title: string;
  showCancel?: boolean;
}

export default function Header({ title, showCancel = true }: HeaderProps) {
  const { goBack, navigate } = useNavigation();

  const handleNavigateGoBack = useCallback(() => {
    goBack();
  }, []);

  const handleNavigateToHomeScreen = useCallback(() => {
    navigate('OrphanagesMap');
  }, []);

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={handleNavigateGoBack}>
        <Icon name="arrow-left" size={24} color="#15B6D6" />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>

      { showCancel ? (
        <BorderlessButton onPress={handleNavigateToHomeScreen}>
          <Icon name="x" size={24} color="#ff669d" />
        </BorderlessButton>
      ) : (
        <View />
      ) }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f9fafc',
    borderBottomWidth: 1,
    borderColor: '#dde3f0',
  },
  title: {
    fontFamily: 'Nunito_600SemiBold',
    color: '#8fa7b3',
    fontSize: 16,
  },
});