import React from 'react';
import {
  TextProps,
  Text as RNText, // eslint-disable-line no-restricted-imports
  StyleSheet,
} from 'react-native';

const Text = (props: TextProps) => {
  const { children, style } = props;
  let styles = style;
  const objStyle = StyleSheet.flatten(style || {});
  if (!objStyle.fontFamily || objStyle.fontFamily === 'Outfit') {
    objStyle.fontFamily = 'Outfit_500Medium';
    if (objStyle.fontWeight === 'bold' || objStyle.fontWeight === '700') objStyle.fontFamily = 'Outfit_700Bold';
    styles = objStyle;
  }
  return (
    <RNText {...props} style={styles}>
      {children}
    </RNText>
  );
};

export default Text;
