import React from 'react';
import {
  TextProps,
  Text as RNText, // eslint-disable-line no-restricted-imports
  StyleSheet,
} from 'react-native';

export default function Text(props: TextProps) {
  const { children, style } = props;
  const styles = style;
  if (style) {
    const objStyle = StyleSheet.flatten(style);
    if (!objStyle.fontFamily) {
      /* You can optionally define a default font family and additional font weight families here
         (don't forget to change styles from const to let, too!) */
      /* objStyle.fontFamily = 'Outfit_500Medium';
      if (objStyle.fontWeight === 'bold' || objStyle.fontWeight === '700') objStyle.fontFamily = 'Outfit_700Bold';
      styles = objStyle; */
    }
  }
  return (
    <RNText {...props} style={styles}>
      {children}
    </RNText>
  );
}
