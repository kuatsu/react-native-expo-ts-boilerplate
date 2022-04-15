import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { fireEvent, waitFor } from '@testing-library/react-native';
import I18n from 'i18n-js';
import Home from '../../src/screens/Home';
import Strings from '../../src/config/locales/en.json';
import renderWithQueryClient from './utils/renderWithQueryClient';

I18n.translations = { en: Strings };

it('should update the counter on click', () => {
  const { getByTestId } = renderWithQueryClient(<Home />);
  const button = getByTestId('increase_count_button');

  fireEvent.press(button);
  expect(button).toHaveTextContent(Strings.screens.home.buttonTitle.replace('%{count}', '1'));
  fireEvent.press(button);
  fireEvent.press(button);
  expect(button).toHaveTextContent(Strings.screens.home.buttonTitle.replace('%{count}', '3'));
});

it('should show lorem ipsum', async () => {
  const { getByTestId } = renderWithQueryClient(<Home />);
  const text = getByTestId('lorem_ipsum_text');

  await waitFor(() => /^Lorem ipsum/.test(text.props.children as string));
});
