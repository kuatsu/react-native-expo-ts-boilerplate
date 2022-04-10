import React from 'react';
import * as Localization from 'expo-localization';
import AppLoading from 'expo-app-loading';
import { useFonts, Outfit_500Medium, Outfit_700Bold } from '@expo-google-fonts/outfit';
import I18n from 'i18n-js';
import { connectToDevTools } from 'react-devtools-core';
import Locales from './config/locales';
import StackNavigator from './navigation';

I18n.translations = Locales;
I18n.defaultLocale = 'en';
I18n.locale = Localization.locale;
I18n.fallbacks = true;

if (__DEV__) {
  connectToDevTools({
    host: 'localhost',
    port: 8097,
  });
}

const App = () => {
  // Don't forget to add new font families to the custom Text component!
  const [fontsLoaded] = useFonts({
    Outfit_500Medium,
    Outfit_700Bold,
    // You can also add fonts from local files
    // 'MyCoolFont': require('./assets/fonts/my-cool-font.ttf'),
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <StackNavigator />
  );
};

export default App;
