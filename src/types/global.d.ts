import type { UseMutationOptions, UseQueryOptions } from 'react-query';

/* eslint-disable max-len */
export type StackNavigatorParamList = {
  Home: {},
};

export type UseQueryTypeHelper<ApiFunc extends (...args: any) => any> = UseQueryOptions<Awaited<ReturnType<ApiFunc>>, Error, Awaited<ReturnType<ApiFunc>>, any>;
export type UseMutationTypeHelper<ApiFunc extends (...args: any) => any, Params extends Record<string, any> | void> = UseMutationOptions<Awaited<ReturnType<ApiFunc>>, Error, Params>;
