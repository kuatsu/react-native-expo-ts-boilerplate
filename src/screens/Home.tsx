import I18n from 'i18n-js';
import React, { useCallback } from 'react';
import {
  Button, View, useColorScheme, StyleSheet,
} from 'react-native';
import Text from '../components/Text';
import { getThemedStyles } from '../utils/helpers';
import useStore from '../utils/store';

const HomeScreen = () => {
  const colorScheme = useColorScheme();
  const styles = getThemedStyles(baseStyles, lightStyles, darkStyles, colorScheme);

  const { count, incrementCount } = useStore();

  const buttonClicked = useCallback(() => {
    incrementCount();
  }, [incrementCount]);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{I18n.t('screens.home.welcomeText')}</Text>
      <Button
        onPress={() => buttonClicked()}
        title={I18n.t('screens.home.buttonTitle', { count })}
      />
    </View>
  );
};

export default HomeScreen;

const baseStyles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

const lightStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
  },
  text: {
    color: '#222',
  },
});

const darkStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
  },
});
