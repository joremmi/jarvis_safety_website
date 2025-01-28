import { NextPage } from 'next'

export type PageProps = {
  params: Record<string, string>
  searchParams?: Record<string, string | string[] | undefined>
}

export type NextPageWithProps<T = Record<string, unknown>> = NextPage<
  T & PageProps
>
