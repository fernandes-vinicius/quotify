import useSWR from 'swr'

import { getCategories } from '~/services/categories'

export function useCategories() {
  const { data: categories, ...query } = useSWR('/categories', getCategories, {
    // revalidateOnFocus: false,
  })

  return {
    categories,
    ...query,
  }
}
