import React from 'react';
import * as Localization from 'expo-localization';
import I18n from 'i18n-js';
import Locales from './config/locales';
import StackNavigator from './navigation';

I18n.translations = Locales;
I18n.defaultLocale = 'en';
I18n.locale = Localization.locale;
I18n.fallbacks = true;

const App = () => (
  <StackNavigator />
);

export default App;
