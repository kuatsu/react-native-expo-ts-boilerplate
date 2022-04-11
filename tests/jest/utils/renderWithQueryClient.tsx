import React from 'react';
import { render } from '@testing-library/react-native';
import { QueryClient, QueryClientProvider } from 'react-query';

const renderWithQueryClient = (component: React.ReactNode) => render(
  <QueryClientProvider client={new QueryClient()}>{component}</QueryClientProvider>,
);

export default renderWithQueryClient;
