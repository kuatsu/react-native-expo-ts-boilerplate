import I18n from 'i18n-js';
import React, { useCallback, useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Text from '../components/Text';

const HomeScreen = () => {
  const [count, setCount] = useState(0);

  const buttonClicked = useCallback(() => {
    setCount(count + 1);
  }, [count]);

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
