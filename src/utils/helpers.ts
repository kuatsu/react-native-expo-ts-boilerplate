import { StyleSheet, StyleProp } from 'react-native';

type PureStyleObject = Record<string, StyleProp<any>>;
// eslint-disable-next-line import/prefer-default-export
export const getThemedStyles = <B extends PureStyleObject, L extends PureStyleObject, D extends PureStyleObject>(
  baseStyles: B,
  lightStyles: L,
  darkStyles: D,
): { light: B & L, dark: B & D } => {
  const builtLightStyles: PureStyleObject = {};
  const builtDarkStyles: PureStyleObject = {};

  // First, merge the themed styles with the existing base styles
  for (const [styleKey, baseStyleObject] of Object.entries(baseStyles)) {
    builtLightStyles[styleKey] = { ...baseStyleObject, ...lightStyles[styleKey] };
    builtDarkStyles[styleKey] = { ...baseStyleObject, ...darkStyles[styleKey] };
  }
  // Then, add the remaining themed styles
  for (const [styleKey, themedStyleObject] of Object.entries(lightStyles)) {
    if (Object.prototype.hasOwnProperty.call(builtLightStyles, styleKey)) continue;
    builtLightStyles[styleKey] = themedStyleObject;
  }
  for (const [styleKey, themedStyleObject] of Object.entries(darkStyles)) {
    if (Object.prototype.hasOwnProperty.call(builtDarkStyles, styleKey)) continue;
    builtDarkStyles[styleKey] = themedStyleObject;
  }

  return { light: StyleSheet.create(builtLightStyles) as B & L, dark: StyleSheet.create(builtDarkStyles) as B & D };
};
