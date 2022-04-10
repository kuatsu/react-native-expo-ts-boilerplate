import { StyleSheet, StyleProp } from 'react-native';

type PureStyleObject = Record<string, StyleProp<any>>;
// eslint-disable-next-line import/prefer-default-export,arrow-body-style
export const getThemedStyles = <B extends PureStyleObject, T extends PureStyleObject>(
  baseStyles: B,
  lightStyles: T,
  darkStyles: T,
  colorScheme: 'dark' | 'light' | null | undefined,
// eslint-disable-next-line arrow-body-style
): B & T => {
  const themedStyles = colorScheme === 'dark' ? darkStyles : lightStyles;
  const builtStyle: PureStyleObject = {};

  // First, merge the themed styles with the existing base styles
  for (const [styleKey, baseStyleObject] of Object.entries(baseStyles)) {
    builtStyle[styleKey] = { ...baseStyleObject, ...themedStyles[styleKey] };
  }
  // Then, add the remaining themed styles
  for (const [styleKey, themedStyleObject] of Object.entries(themedStyles)) {
    if (Object.prototype.hasOwnProperty.call(builtStyle, styleKey)) continue;
    builtStyle[styleKey] = themedStyleObject;
  }

  return StyleSheet.create(builtStyle) as B & T;
};
