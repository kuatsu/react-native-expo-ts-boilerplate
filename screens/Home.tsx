import React, { useCallback, useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Text from '../components/Text';

const HomeScreen = () => {
  const [counter, setCounter] = useState(0);

  const buttonClicked = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  return (
    <View style={styles.wrapper}>
      <Text>Hello world! Click the button.</Text>
      <Button
        onPress={() => buttonClicked()}
        title={`You've clicked ${counter} times.`}
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
