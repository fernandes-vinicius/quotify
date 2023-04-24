import useSWR from 'swr'

import { getPhrase } from '~/services/phrases'

export function usePhrase(categoryId?: string | null) {
  const { data: phrase, ...query } = useSWR(
    ['/phrase', categoryId],
    () => getPhrase(categoryId),
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    },
  )

  return {
    phrase,
    ...query,
  }
}
