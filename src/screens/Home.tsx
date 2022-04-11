import I18n from 'i18n-js';
import React, { useCallback } from 'react';
import {
  Button, View, useColorScheme, StyleSheet,
} from 'react-native';
import Text from '../components/Text';
import { useLoremIpsum } from '../hooks/query/lorem_ipsum';
import { getThemedStyles } from '../utils/helpers';
import useStore from '../utils/store';

const HomeScreen = () => {
  const colorScheme = useColorScheme();
  const styles = themedStyles[colorScheme || 'light'];

  const { count, incrementCount } = useStore();
  const loremIpsum = useLoremIpsum();

  const buttonClicked = useCallback(() => {
    incrementCount();
  }, [incrementCount]);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{I18n.t('screens.home.welcomeText')}</Text>
      <Button
        onPress={() => buttonClicked()}
        title={I18n.t('screens.home.buttonTitle', { count })}
        testID="increase_count_button"
      />
      <Text style={[styles.text, styles.title]}>{I18n.t('screens.home.loremIpsumTitle')}</Text>
      <Text style={[styles.text, styles.textCenter]}>
        {loremIpsum.isSuccess ? loremIpsum.data.text : 'Couldn\'t load Lorem Ipsum text... 😢'}
      </Text>
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
    paddingHorizontal: 20,
  },
  textCenter: {
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    marginTop: 20,
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

const themedStyles = getThemedStyles(baseStyles, lightStyles, darkStyles);
