// types/next.ts

import { NextPage } from 'next'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type PageProps<T extends Record<string, string> = {}> = {
  params: T;
  searchParams?: Record<string, string | string[] | undefined>;
};

export type NextPageWithProps<T = Record<string, unknown>> = NextPage<
  T & PageProps
>
