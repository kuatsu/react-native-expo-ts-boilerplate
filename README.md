# react-native-expo-ts-boilerplate

This is a simple boilerplate for React Native apps using Expo and TypeScript. It has the following features:
* Full TypeScript support 😍
* Expo, Expo EAS and `expo-dev-client` for easy development and deployment + using previously unsupported native modules with Expo 🚀
* State management using the lightweight & unopinionated library [zustand](https://github.com/pmndrs/zustand) 🐻
* Easy-to-use dark mode using the native `useColorScheme()` hook and a nifty helper function to merge your themed styles! ⚫️⚪️
* Simple [@react-navigation/native](https://github.com/react-navigation/react-navigation) Stack set-up 🗺
* Custom `Text` component for easily adding custom font families with different font weights into your project, either from local fonts or Google Fonts using [@expo-google-fonts](https://docs.expo.dev/guides/using-custom-fonts/)! 📝
* Localizations using [expo-localization](https://docs.expo.dev/versions/latest/sdk/localization/) and [i18n-js](https://www.npmjs.com/package/i18n-js) 🌍
* Linting and preconfigured style guides using ESLint and great plugins like [airbnb](https://github.com/airbnb/javascript) and [react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) ✅
* [Husky](https://github.com/typicode/husky) hook to lint commit messages using [conventional-commit rules](https://github.com/conventional-changelog/commitlint) 🥸
* Completely open-source using the [MIT license](https://github.com/Kuatsu/react-native-expo-ts-boilerplate/blob/master/LICENSE)! ✨

## Getting started
Simply clone this repository using `git clone https://github.com/Kuatsu/react-native-expo-ts-boilerplate my_cool_project` and start working. It's really that simple!

## FAQ
### Why doesn't this boilerplate use Redux?
While we think Redux can be a great and versatile solution for many projects, it's often "overkill" for smaller and medium-sized projects. Handling all your global state in a multitude of files consisting of reducers and stores can be overwhelming especially for newer developers. That's why, for this boilerplate, we've settled for the popular [zustand](https://github.com/pmndrs/zustand) state management library: It's lightweight, heavily unopinionated and easy to understand even for developers new to React world.

## License
This project is released under the open-source [MIT License](https://github.com/Kuatsu/react-native-expo-ts-boilerplate/blob/master/LICENSE).
