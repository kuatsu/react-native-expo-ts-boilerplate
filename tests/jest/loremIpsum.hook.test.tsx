import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { QueryClient, QueryClientProvider } from 'react-query';
import { renderHook } from '@testing-library/react-hooks';
import { useGetLoremIpsum } from '../../src/hooks/query/loremIpsum';

it('should generate lorem ipsum text', async () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );

  const { result, waitFor } = renderHook(() => useGetLoremIpsum(), { wrapper });

  await waitFor(() => result.current.isSuccess);

  expect(result.current.data).not.toBeFalsy();
  expect(result.current.data!.text).toMatch(/^Lorem ipsum/);
});
