import I18n from 'i18n-js';
import React, { useCallback } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Text from '../components/Text';
import useStore from '../utils/store';

const HomeScreen = () => {
  const { count, incrementCount } = useStore();

  const buttonClicked = useCallback(() => {
    incrementCount();
  }, [incrementCount]);

  return (
    <View style={styles.wrapper}>
      <Text>{I18n.t('screens.home.welcomeText')}</Text>
      <Button
        onPress={() => buttonClicked()}
        title={I18n.t('screens.home.buttonTitle', { count })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default HomeScreen;
